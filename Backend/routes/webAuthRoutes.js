import express from "express";

import {
  webSignup,
  webLogin,
} from "../controllers/webAuthController.js";

const router = express.Router();

router.post("/signup", webSignup);

router.post("/login", webLogin);

export default router;