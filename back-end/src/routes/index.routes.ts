import express, { NextFunction, Request, Response } from 'express';
import httpErrors from 'http-errors';
import auth from './auth.routes';

const router = express.Router();
router.use('/api/auth', auth);

router.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.json({ "message": "Back-end OK!" });
});

router.use( async (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  console.log(res);
  next(httpErrors.NotFound('Route not Found!'));
});

router.use( (err: any, res: Response) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
});

export default router;