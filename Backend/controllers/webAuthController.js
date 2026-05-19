import {
  webSignupService,
  webLoginService,
} from "../services/webAuthService.js";

/* ============ SIGNUP ============ */

export const webSignup = async (
  req,
  res
) => {

  try {

    const user =
      await webSignupService(req.body);

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ============ LOGIN ============ */

export const webLogin = async (
  req,
  res
) => {

  try {

    const data =
      await webLoginService(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      ...data,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};