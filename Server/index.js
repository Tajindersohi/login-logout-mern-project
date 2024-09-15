// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import your auth routes
const dotenv = require("dotenv").config();
const { connectDb } = require('./config/dbConnection');
const PORT = process.env.PORT || 5000;

const app = express();
const start = async () =>{
  try{
    console.log(process.env.CONNECTION_STRING);
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));
start();

// Use auth routes
app.use('/api', authRoutes);
// server.js

mongoose.set('debug', true);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
