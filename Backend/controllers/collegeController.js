// controllers/collegeController.js
import * as service from "../services/collageService.js";

export const create = async (req, res, next) => {
  try {
    const data = await service.createCollege(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const data = await service.getColleges();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const addCourse = async (req, res, next) => {
  try {
    const { collegeId, courseId } = req.body;
    const data = await service.addCourseToCollege(collegeId, courseId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};