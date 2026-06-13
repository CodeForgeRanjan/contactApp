import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  first_Name: {
    type: String,
    required: true,
  },
  last_Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  address: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model("Contact", contactSchema);
// module.exports contact;
export default contact;
