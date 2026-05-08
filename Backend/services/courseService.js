// services/courseService.js
import Course from "../models/Course.js";

export const createCourse = (data) => Course.create(data);
export const getCourses = () => Course.find().populate("category");