import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // Load environment variables

import mongoose from 'mongoose';

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging step

mongoose.connect('mongodb://127.0.0.1:27017/couchpotatoes', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('Database connected!'))
  .catch(err => console.log('Database connection error:', err));
  

export default mongoose.connection;
