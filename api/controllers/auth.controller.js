import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorhandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    const {username , email , password} = req.body;
    const hashedPassowrd = bcryptjs.hashSync(password,10);
    try {
        const newUser = new User({username,email,password : hashedPassowrd});
        await newUser.save();
        res.status(201).json('user created succesfully');
    } catch (error) {
        next(error);
    }
};