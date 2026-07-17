let express = require("express");
let bcrypt = require("bcryptjs")
let path = require("path");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();
const { DATABASE_URL } = process.env;

let app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.post('/login', async (req, res) => {
  const client = await pool.connect()
  try {
    const { email, password } = req.body
    const emailExist = await client.query("SELECT * from users WHERE email = $1", [email])
    if (emailExist.rowCount <= 0) return res.status(400).json({ "message": "User not found" })
    const data = emailExist.rows[0]
    if (data.password === password) {
      res.json({ "message": "login succesful" })
    } else {
      res.json({ "message": "wrong password" })
    }
  } catch (error) {
    console.error(error, error.message)
  } finally {
    client.release()
  }
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
