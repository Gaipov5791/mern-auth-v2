import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import colors from 'colors';
const port = process.env.port || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send("Server is OK!");
});

app.listen(port, () => console.log(`Server runs on port ${port}`));