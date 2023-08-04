import jsonWebToken from 'jsonwebtoken';
import httpErrors from 'http-errors';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.ACCESS_TOKEN_SECRET || 'dummy_secret_key';

export const signAccessToken = (payload: any) => {
  return new Promise((resolve, reject) => {
    jsonWebToken.sign({ payload }, secret, (err: any, token: any) => {
      if(err) {
        reject(httpErrors.InternalServerError());
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyAccessToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jsonWebToken.verify(token, secret, (err: any, payload: any) => {
      if(err) {
        const msg = err.name == 'JsonWebTokenError' ? 'Unauthorized Access!' : err.message;
        reject(httpErrors.Unauthorized(msg));
      } else {
        resolve(payload);
      }
    });
  });
};