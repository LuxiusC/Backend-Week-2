### Login Endpoint (User Authentication)

#### Task:

Create a Node.js API endpoint that authenticate users by checking their email and password against a PostgreSQL database and return appropriate success or error message

#### Instructions:

1. **Create a Users table in NeonConsole, or use the existing table from the mock test:**

   - Ensure a users table exists with columns:
      - id – primary key, auto-increment
      - email – string
      - password – string (plain-text or hashed)
   - Insert some test data so endpoints can be tested


2. **Create a Login Endpoint:**

   - Set up an Express server and create a POST /login route.
   - Accept user data in the request body: email and password.
   - Query PostgreSQL users table for the provided email.
   - Validate the password (plain-text or hashed using bcrypt if stored hashed).
   - If the email or password is incorrect, return a 400/401 error.
   - If credentials are correct, return a success message

3. **PostgreSQL Setup:**
   - Ensure PostgreSQL is set up.
   - Use a package like pg to connect Node.js to PostgreSQL.

4. **Expected Interactions:**

   - **Login Request:**
     - Client sends POST request to /login with email and password.
     - Correct credentials, return success message.
     - Wrong credentials, return error message.
     - Non-existent user, return error message.

   - Example:
     `POST /login`
     ```json
     {
        "email": "john@example.com",
        "password": "securePassword123"
     }
     ```
     
   - Success Response:
     ```json
     { "message": "Login successful" }
     ```
   - Error Response:
     ```json
     { "error": "Invalid email or password" }
     { "error": "User not found" }
     ```

5. **Testing the Endpoint:**

   - Use ThunderClient/ Postman or similar tools to send test requests.
   - Verify that credentials are correctly validated against PostgreSQL.
   - Ensure the users table has test data for validation.

6. **Reference:**
   - Creating an Express application: https://expressjs.com/en/5x/api.html 

   - Express Routing: https://www.w3schools.com/nodejs/nodejs_express.asp#BasicRouting 

   - PostgreSQL with Node.js: Connection: https://neon.com/docs/guides/express (node-postgres)

   - PostgreSQL with Node.js: Query: https://marmelab.com/postgres-queries/pool.html 

   - PostgreSQL CREATE Table: https://www.w3schools.com/postgresql/postgresql_create_table.php

   - PostgreSQL SELECT: https://www.w3schools.com/postgresql/postgresql_select.php 

   - PostgreSQL INSERT: https://www.w3schools.com/postgresql/postgresql_insert_into.php 
