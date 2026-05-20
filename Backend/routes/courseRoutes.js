// routes/courseRoutes.js

import express from "express";

import {
  create,
  getAll,
  updateCourse,
  deleteCourse,
  getCoursesByCategory,
} from "../controllers/courseController.js";

const router = express.Router();

router.post("/", create);

router.get("/", getAll);

// CATEGORY BASED COURSES
router.get(
  "/category/:categoryId",
  getCoursesByCategory
);

router.put("/:id", updateCourse);

router.delete("/:id", deleteCourse);

export default router;