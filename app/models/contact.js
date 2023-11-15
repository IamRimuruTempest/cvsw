import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required."],
    trim: true,
    minLength: [2, "Firstname must be larger than 2 characters"],
    maxLength: [30, "Firstname must be lesser than 30 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required."],
    trim: true,
    minLength: [2, "Lastname must be larger than 2 characters"],
    maxLength: [30, "Lastname must be lesser than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  phonenumber: {
    type: String,
    required: [true, "Phone number is required."],
    trim: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
