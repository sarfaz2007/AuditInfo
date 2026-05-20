// controllers/courseController.js

import * as service from "../services/courseService.js";

export const create = async (
  req,
  res,
  next
) => {
  try {
    const data =
      await service.createCourse(req.body);

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (
  req,
  res,
  next
) => {
  try {
    const data =
      await service.getCourses();

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// GET COURSES BY CATEGORY
export const getCoursesByCategory =
  async (req, res, next) => {
    try {

      const data =
        await service.getCoursesByCategory(
          req.params.categoryId
        );

      res.json(data);

    } catch (err) {

      next(err);
    }
};

export const updateCourse = async (
  req,
  res,
  next
) => {
  try {
    const data =
      await service.updateCourse(
        req.params.id,
        req.body
      );

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteCourse = async (
  req,
  res,
  next
) => {
  try {
    const data =
      await service.deleteCourse(
        req.params.id
      );

    res.json(data);
  } catch (err) {
    next(err);
  }
};