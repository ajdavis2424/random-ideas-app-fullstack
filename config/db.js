//using mongoose here to connect to database
const mongoose = require('mongoose');

//call mongoose.connect which returns a promise
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI); //pass in mongo uri via with proess.env
  console.log(`MongoDB Connected:${conn.connection.host}`);
};

module.exports = connectDB;
