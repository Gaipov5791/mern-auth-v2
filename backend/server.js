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

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Server is OK!");
});

app.listen(port, () => console.log(`Server runs on port ${port}`));

//Q4ATUSDiQ3qzt8dn