import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorhandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signin = async (req,res,next) => {
    const {username , password} = req.body;      
    try {
        const validUser = await User.findOne({username});
        if(!validUser){
            return next(errorhandler(404,'User Not Found'));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorhandler(401,'Wrong credentials'));
        }
        const token = jwt.sign({ id : validUser._id},process.env.secret);
        const {password : pass , ...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly: true }).status(200).json(rest); 
    } catch (error) {
        next(error);
    }
};