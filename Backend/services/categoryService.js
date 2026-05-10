// services/categoryService.js
import Category from "../models/Category.js";

export const createCategory = (data) => Category.create(data);
export const getCategories = () => Category.find();
// UPDATE
export const updateCategory = (id, data) =>
  Category.findByIdAndUpdate(id, data, {
    new: true,
  });

// DELETE
export const deleteCategory = (id) =>
  Category.findByIdAndDelete(id);