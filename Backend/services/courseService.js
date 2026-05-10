// services/courseService.js
import Course from "../models/Course.js";

export const createCourse = (data) => Course.create(data);
export const getCourses = () => Course.find().populate("category");
export const updateCourse = (id, data) =>
  Course.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteCourse = (id) =>
  Course.findByIdAndDelete(id);