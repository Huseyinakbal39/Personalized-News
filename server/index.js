import express from 'express';
import newsRoute from './routes/news.js';
import conn from './db.js';
import authRoute from './routes/auth.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve('server/.env') });



//DB baglanti
conn();

const app = express();
const port = process.env.PORT;


app.use(express.json()); 
app.use(cors());
app.use("/api/news", newsRoute);
app.use("/api/auth", authRoute);

app.listen (port, () =>{
    console.log('server listening on ${port}');
})