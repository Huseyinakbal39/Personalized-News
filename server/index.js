import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import cors from 'cors';

dotenv.config();
//DB baglanti
conn();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/',(req,res) =>{
    res.send('DT CLOUD')
})
app.listen (port, () =>{
    console.log('server listening on 8080');
})