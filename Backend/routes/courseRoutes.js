// routes/courseRoutes.js
import express from "express";
import { create, getAll } from "../controllers/courseController.js";

const router = express.Router();

router.post("/createcourse", create);
router.get("/getcourses", getAll);

export default router;