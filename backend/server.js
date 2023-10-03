import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import colors from 'colors';
const port = process.env.port || 5000;
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.get('/', (req, res) => {
    res.send("Server is OK!");
});

app.listen(port, () => console.log(`Server runs on port ${port}`));

//Q4ATUSDiQ3qzt8dn