import { errorhandler } from "./error.js";
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(errorhandler(401, 'UNAUTHORISED'));
    jwt.verify(token, process.env.secret, (err, user) => {
        if (err) return next(errorhandler(403, 'FORBIDDEN'));
        req.user = user;
        next();
    });
};