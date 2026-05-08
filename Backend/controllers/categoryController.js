// controllers/categoryController.js
import * as service from "../services/categoryService.js";

export const create = async (req, res, next) => {
  try {
    const data = await service.createCategory(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const data = await service.getCategories();
    res.json(data);
  } catch (err) {
    next(err);
  }
};