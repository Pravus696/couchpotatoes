import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/couchpotatoes')
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.log(err));
export default mongoose.connection;
