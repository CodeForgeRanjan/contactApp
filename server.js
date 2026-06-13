const app = express();
import express from "express";
import mongoose from "mongoose";
import ContactRoutes from "./routes/contact.route.js";
import connectDB from "./config/database.js";


app.set("view engine", "ejs"); 


app.use(express.urlencoded({ extended: false })); 

app.use(express.static("public"));


//Routes
app.use(ContactRoutes);

//Database connection
connectDB();

// port connection
app.listen(5432, () => {
  console.log("Server started successfully on port 5432");
});
