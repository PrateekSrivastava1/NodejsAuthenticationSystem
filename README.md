# NodejsAuthenticationSystem

A complete authentication system which can be used as a starter code for creating any new
application

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- Sign up with email
- Sign in
- Sign out
- Reset password after sign in
- Store encrypted password in database
- Google login/signup (Social authentication)
- Passport to maintain sessions
- Reset password using OTP sent on your email
- Display notifications for:
  : Unmatching passwords during sign up
  : Incorrect password during sign in

## Installation

1. Clone the repository: `git clone git@github.com:PrateekSrivastava1/NodejsAuthenticationSystem.git`
2. Navigate to the project directory: `cd NodejsAuthenticationSystem`
3. Install dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Access the application through a web browser at `http://localhost:3200/api/users/signup`.

## Technologies Used

- Node.js
- Express.js
- Mongoose (for database interaction)
- HTML/JavaScript
- Tailwind for styling
- EJS (Embedded JavaScript templates)

## Screenshot

<img width="1512" alt="Screenshot 2023-12-01 at 2 21 32 AM" src="https://github.com/PrateekSrivastava1/NodejsAuthenticationSystem/assets/65366517/aa36aea6-056f-4551-9684-ea5e6a65e0ce">
<img width="1512" alt="Screenshot 2023-12-01 at 2 20 49 AM" src="https://github.com/PrateekSrivastava1/NodejsAuthenticationSystem/assets/65366517/53fa6111-154b-47c3-8c5c-750b109ba368">
<img width="1512" alt="Screenshot 2023-12-01 at 2 20 10 AM" src="https://github.com/PrateekSrivastava1/NodejsAuthenticationSystem/assets/65366517/8cddcabe-110d-492b-97e0-d5e2b470c9c2">
<img width="1512" alt="Screenshot 2023-12-01 at 2 19 12 AM" src="https://github.com/PrateekSrivastava1/NodejsAuthenticationSystem/assets/65366517/4a0c5660-0a6f-4bf1-920a-fab92d7f3c07">
<img width="1512" alt="Screenshot 2023-12-01 at 2 19 00 AM" src="https://github.com/PrateekSrivastava1/NodejsAuthenticationSystem/assets/65366517/c575d034-5a1f-40bf-8440-a9eca1a4bfef">
<img width="1512" alt="Screenshot 2023-12-01 at 2 39 44 AM" src="https://github.com/PrateekSrivastava1/NodejsAuthenticationSystem/assets/65366517/d6de13fc-2342-4bcb-b9f9-618cb7efc827">




























## Folder Structure

```plaintext
NodejsAuthenticationSystem/
|__ node_modules/
|__ src/
    |__ config/
    |__ views/
    |__ features/
        |__ feature/
            |__ controller/
            |__ repository/
            |__ routes/
            |__ schema/
    |__ middlewares/
        |__ errorHandler.js
        |__ invalidRoutes.middleware.js
        |__ jwtAuth.js
        |__ logger.middleware.js
    |__ utils/
        |__ hashPassword.js
        |__ mailer.js
|__ .env
|__ index.js
|__ server.js
|__ combined.log

```
