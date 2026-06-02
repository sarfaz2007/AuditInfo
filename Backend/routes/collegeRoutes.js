import express from "express";

import {
  create,
  getAll,
  addCourse,
  updateCollege,
  deleteCollege,
  getCollegesByCourse,
} from "../controllers/collegeController.js";

const router = express.Router();

router.post("/", create);

router.get("/", getAll);

// GET COLLEGES BY COURSE
router.get(
  "/course/:courseId",
  getCollegesByCourse
);

router.post("/add-course", addCourse);

router.put("/:id", updateCollege);

router.delete("/:id", deleteCollege);

export default router;