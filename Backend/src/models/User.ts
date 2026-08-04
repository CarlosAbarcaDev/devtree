import mongoose from "mongoose";

interface IUser {
  username: string;
  handle: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  handle: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
