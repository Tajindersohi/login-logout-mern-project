// const connectDB = require("./config/dbConnection");
const { connectDb } = require('./config/dbConnection');

require("dotenv").config();
const Contact = require("./Models/contactModel");
const ContactJson = require("./data.json");

const start = async () =>{
    try{
      await connectDb();
      await Contact.create(ContactJson)
        console.log(`Success`);
    } catch (error) {
      console.log(error);
    }
  }

start();