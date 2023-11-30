// Import required modules
import express from 'express';
import UserController from './user.controller.js';
import jwtAuth from '../../middlewares/jwtAuth.js';

// Create an Express router
const router = express.Router();

// Create an instance of the UserController
const userController = new UserController();

// Defined routes for different user actions and linked them to respective controller methods

// Requests to render HTML pages
router.route('/homePage').get(jwtAuth, (req, res) => {
  userController.getHomePage(req, res);
});
router.route('/signup').get((req, res) => {
  userController.getSignupPage(req, res);
});
router.route('/signin').get((req, res) => {
  userController.getSigninPage(req, res);
});
router.route('/resetPassword').get((req, res) => {
  userController.getResetPasswordPage(req, res);
});

// Route for user signup
router.route('/signup').post((req, res) => {
  userController.signUp(req, res); // Calling signUp method from UserController
});

// Route for user signin
router.route('/signin').post((req, res) => {
  userController.signIn(req, res);
});

// Route for user logout
router.route('/logout').get(jwtAuth, (req, res) => {
  userController.logout(req, res); // Calling logout method from UserController after JWT authentication
});

// Route for updating user password
router.route('/resetPassword').post(jwtAuth, (req, res, next) => {
  userController.updatePassword(req, res, next);
});

// Export the router to be used in other parts of the application
export default router;
