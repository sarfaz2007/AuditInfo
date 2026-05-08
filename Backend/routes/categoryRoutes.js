// routes/categoryRoutes.js
import express from "express";
import { create, getAll } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);

export default router;