// routes/courseRoutes.js
import express from "express";
import { create, getAll,updateCourse,deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;