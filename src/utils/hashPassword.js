import bcrypt from 'bcrypt';
import { customErrorHandler } from '../middlewares/errorHandler.js';

export const hashPassword = async password => {
  try {
    return await bcrypt.hash(password, 12);
  } catch (error) {
    throw new customErrorHandler(400, 'Encountered error in hashing password');
  }
};

export const compareHashedPassword = async (password, hashPassword) => {
  try {
    return await bcrypt.compare(password, hashPassword);
  } catch (error) {
    throw new customErrorHandler(400, 'Encountered error in comparing hashed password');
  }
};
