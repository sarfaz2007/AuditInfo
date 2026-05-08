// controllers/courseController.js
import * as service from "../services/courseService.js";

export const create = async (req, res, next) => {
  try {
    const data = await service.createCourse(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const data = await service.getCourses();
    res.json(data);
  } catch (err) {
    next(err);
  }
};