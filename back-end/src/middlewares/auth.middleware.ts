import { Response } from 'express';
import { verifyAccessToken } from '../utils/jwt/jwt.util';
import httpErrors from 'http-errors';

export const auth = async (req: any, res: Response, next: any) => {
  if (!req.headers.authorization) {
    return next(httpErrors.Unauthorized('Not authorized, access credentials are required!'));
  }
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    // return next(httpErrors.Unauthorized());
    res.json({
      code: httpErrors.Unauthorized(),
      success: false,
      message: 'You need to login to access this resource!',
    });
  }
  await verifyAccessToken(token).then(user => {
    req.user = user;
    next();
  }).catch(e => {
    next(httpErrors.Unauthorized(e.message));
  })
}