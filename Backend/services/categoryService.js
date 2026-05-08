// services/categoryService.js
import Category from "../models/Category.js";

export const createCategory = (data) => Category.create(data);
export const getCategories = () => Category.find();