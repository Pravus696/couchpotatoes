import type { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
    user?: JwtPayload;
}
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
    _id: unknown;
    email: string;
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const secertKey = process.env.JWT_SECRET_KEY || '';

        jwt.verify(token, secertKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user as JwtPayload;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

export const signToken = (username: string, email: string, _id: unknown) => {
    const payload = {username, email, _id};
    const secretKey = process.env.JWT_SECRET_KEY || '';

    return jwt.sign(payload, secretKey, {expiresIn: '24h'});
};