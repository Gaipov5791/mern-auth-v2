import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

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

export {
    signup,
};
