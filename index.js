// Load all the environment variables in application
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import passport from 'passport';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import expressEjsLayouts from 'express-ejs-layouts';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import userRoutes from './src/features/user/user.routes.js';
import otpRoutes from './src/features/otp/otp.routes.js';
import { errorHandlerMiddleware } from './src/middlewares/errorHandler.js';
import { invalidRoutesHandlerMiddleware } from './src/middlewares/invalidRoutes.middleware.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import jwtAuth from './src/middlewares/jwtAuth.js';

const app = express();

// view setup for ejs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Initialize passport
app.use(passport.initialize());
// app.use(passport.session());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// google authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3200/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
      // using user email to generate a new password
      const formData = {
        name: profile._json.name,
        email: profile._json.email,
        password: profile._json.email
      };
      // normal signup api call to store password in database
      fetch('http://localhost:3200/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          if (response.status == 201) {
            // redirecting to signin page after successfull signup
            res.redirect('/api/users/signin');
          } else {
            console.error('Signup failed:', response);
          }
        })
        .catch(error => {
          console.error('Error occurred during signup:', error);
        });
      cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/signup' }),
  function (req, res) {
    res.redirect('/api/users/signin');
  }
);

// Logger middleware
app.use(loggerMiddleware);

// Routes for post, user, like, comments, otp
app.use('/api/users', userRoutes);
app.use('/api/otp', jwtAuth, otpRoutes);

// Invalid Routes Middleware
app.use(invalidRoutesHandlerMiddleware);

// App level Error Handler
app.use(errorHandlerMiddleware);

export default app;
