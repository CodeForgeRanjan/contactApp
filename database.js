import mongoose from "mongoose";

 const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/contacts-crud")
    .then(() => console.log("Database successfully connected"));
};
export default connectDB;


