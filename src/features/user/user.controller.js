import UserRepository from './user.repository.js';
import { customErrorHandler } from '../../middlewares/errorHandler.js';
import { hashPassword } from '../../utils/hashPassword.js';

export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  // controllers to return HTML pages
  async getHomePage(req, res, next) {
    try {
      res.render('homePage');
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  async getSignupPage(req, res, next) {
    try {
      res.render('signup');
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  async getSigninPage(req, res, next) {
    try {
      res.render('signin');
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  async getResetPasswordPage(req, res, next) {
    try {
      res.render('resetPassword');
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  async signUp(req, res) {
    const { name, email } = req.body;
    let { password } = req.body;
    console.log({ name, email, password });
    try {
      const hashedPassword = await hashPassword(password);
      password = hashedPassword;
      const userData = { name, email, password };
      console.log(userData);
      const user = await this.userRepository.signUp(userData);
      if (user) {
        return res.status(201).send(user);
      } else return res.status(400).send('Email already in use');
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  // User Login
  async signIn(req, res) {
    try {
      let status = await this.userRepository.signIn(req.body);
      if (status.success) {
        res
          .status(201)
          .cookie('jwtToken', status.token, { maxAge: 900000, httpOnly: false })
          .cookie('userId', status.details._id, { maxAge: 900000, httpOnly: false })
          .json({ status: 'success', msg: 'login successful', token: status.token });
      } else {
        res.status(400).json({ status: 'failure', msg: 'invalid user details' });
      }
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  // Updating Password
  async updatePassword(req, res, next) {
    try {
      const { newPassword } = req.body;
      const userId = req.cookies.userId;
      const resp = await this.userRepository.updatePassword(userId, newPassword, next);
      if (resp.success) {
        res
          .status(201)
          .json({ success: true, msg: 'password updated successfully', res: resp.res });
      } else {
        return next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
      }
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }

  // For Logging Out
  async logout(req, res, next) {
    try {
      const userId = req.cookies.userId;
      const token = req.cookies.jwtToken;
      const logout = await this.userRepository.logout(userId, token);
      if (logout.success)
        res
          .status(200)
          .clearCookie('jwtToken')
          .json({ success: true, msg: 'logout successful' });
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in controller.');
    }
  }
}
