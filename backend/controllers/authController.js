import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = new User({username, email, password: hashedPassword});

    try {
        await user.save();
        res.status(200).json({
            message: "Signup successfully"
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export {
    signup,
};
