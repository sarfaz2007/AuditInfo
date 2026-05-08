// controllers/authController.js
import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};