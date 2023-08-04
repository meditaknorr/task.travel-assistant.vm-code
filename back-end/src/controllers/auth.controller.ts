import { NextFunction, Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';
import httpErrors from 'http-errors';

//TODO: Update catch block to return json
export const register_Action = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await registerUser(req.body.email, req.body.password);
        res.status(200).json({
            status: true,
            message: 'Created successfully!',
            data: result,
        });
    }
    catch (e: any) {
        next(httpErrors(e.statusCode, e.message))
    }
}

export const login_Action = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await loginUser(req.body.email, req.body.password);
        res.status(200).json({
            status: true,
            message: "Login successful!",
            data: result,
        });
    } catch (e: any) {
        next(httpErrors(e.statusCode, e.message))
    }
}

// Commented:: Used for test
// export const getAll_Action = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = await getAllUsers();
//         res.status(200).json({
//             status: true,
//             message: 'All users!',
//             data: result,
//         });
//     }
//     catch (e: any) {
//         next(httpErrors(e.statusCode, e.message))
//     }
// }

// export const registerDummy_Action = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = await registerDummyUser();
//         res.status(200).json({
//             status: true,
//             message: 'Dummy created!',
//             data: result,
//         });
//     }
//     catch (e: any) {
//         next(httpErrors(e.statusCode, e.message))
//     }
// }