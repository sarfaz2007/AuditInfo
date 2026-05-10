// routes/categoryRoutes.js
import express from "express";
import { create, getAll, updateCategory, deleteCategory, } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
// UPDATE
router.put("/:id", updateCategory);

// DELETE
router.delete("/:id", deleteCategory);


export default router;