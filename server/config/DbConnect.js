import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
})
const DbUrl = process.env.MONGODB_URI

const DbConnect = async () => {

  try {
    const connectionRes = await mongoose.connect(`${DbUrl}`)
    console.log(`MongoDB Connected.....
      `, `MongoDB Host : ${connectionRes.connection.host}`);
  } catch (err) {
    console.log('MongoDB connection Error', err);
    process.exit(1)
  }
}

export default DbConnect;