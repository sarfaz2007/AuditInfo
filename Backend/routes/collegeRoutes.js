// routes/collegeRoutes.js
import express from "express";
import {
  create,
  getAll,
  addCourse,
  updateCollege,
  deleteCollege
} from "../controllers/collegeController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.post("/add-course", addCourse);
router.put("/:id", updateCollege);
router.delete("/:id", deleteCollege);


export default router;