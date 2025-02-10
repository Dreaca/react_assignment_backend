import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'


const app = express();
dotenv.config()

app.use(express.json())

app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.listen(3000, () => {
    console.log('Server started on port 3000!');
})