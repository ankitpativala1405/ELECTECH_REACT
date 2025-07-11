import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DbConnect from './config/DbConnect.js ';
import router from './routers/user.router.js';

dotenv.config({
  path: './.env'
});

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use("/user",router)

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started on port ${PORT}...`);
    DbConnect();
  } else {
    console.error('Error starting server:', err);
  }
});

