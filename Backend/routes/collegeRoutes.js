// routes/collegeRoutes.js
import express from "express";
import {
  create,
  getAll,
  addCourse,
} from "../controllers/collegeController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.post("/add-course", addCourse);

export default router;