import type { Request, Response } from "express";
import slug from "slug";
import { validationResult } from "express-validator";
import User from "../models/User.ts";
import { checkPassword, hashPassword } from "../utils/auth.ts";

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("User already exists");
    return res.status(409).json({ errors: error.message });
  }

  const handle = slug(username, { lower: true });
  const handleExists = await User.findOne({ handle });
  if (handleExists) {
    const error = new Error("Handle already exists");
    return res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;
  await user.save();
  return res.status(201).send("User registered successfully");
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("User not found");
    return res.status(404).json({ error: error.message });
  }

  // check if password is correct
  const isMatch = await checkPassword(password, user.password);
  if (!isMatch) {
    const error = new Error("Invalid password");
    return res.status(401).json({ error: error.message });
  }

  return res.status(200).send("User logged in successfully");
};
