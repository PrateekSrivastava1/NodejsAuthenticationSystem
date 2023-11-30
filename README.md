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

```

```
