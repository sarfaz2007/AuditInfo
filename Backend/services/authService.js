// services/authService.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (data) => {
  const { name, email, password } = data;

  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash,
  });

  return user;
};

export const loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  return { user, token };
};