import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({username, email, password: hashedPassword});

    try {
        await user.save();
        res.status(200).json({
            message: "Signup successfully"
        });
    } catch (error) {
        next(error);
    }
};

const signin = async (req, res, next) => {
    const {email, password} = req.body;
    
    try {
        const user = await User.findOne({email});
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return next(errorHandler(401, "Wrong credentials"))
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = user._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res
            .cookie("access_token", token, {httpOnly: true, expires: expiryDate})
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};

export {
    signup,
    signin,
};
