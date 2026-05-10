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

// UPDATE
export const updateCategory = async (req, res, next) => {
  try {
    const data = await service.updateCategory(
      req.params.id,
      req.body
    );

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteCategory = async (req, res, next) => {
  try {
    const data = await service.deleteCategory(req.params.id);

    res.json(data);
  } catch (err) {
    next(err);
  }
};