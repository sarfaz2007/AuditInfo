import WebUser from "../models/WebUser.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

/* ============ SIGNUP ============ */

export const webSignupService = async (
  data
) => {

  const existingUser =
    await WebUser.findOne({
      email: data.email,
    });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword =
    await bcrypt.hash(
      data.password,
      10
    );

  const user = await WebUser.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return user;
};

/* ============ LOGIN ============ */

export const webLoginService = async (
  data
) => {

  const user = await WebUser.findOne({
    email: data.email,
  });

  if (!user) {
    throw new Error("Invalid email");
  }

  const isMatch = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user,
  };
};