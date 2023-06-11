const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5005;
const connectDB = require('./config/db');

connectDB();

//initialize a vaiable and set to express
const app = express();

//Body parser middleware--
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create route app. http method
app.get('/', (req, res) => {
  res.json({ mesaage: 'Welcome to the RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter); //add middleware

app.listen(port, () => console.log(`Server listening on port ${port}`));
