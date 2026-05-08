// services/collageService.js
import College from "../models/Collage.js";

export const createCollege = (data) => College.create(data);

export const getColleges = () =>
  College.find().populate("courses");

export const addCourseToCollege = async (collegeId, courseId) => {
  return College.findByIdAndUpdate(
    collegeId,
    { $push: { courses: courseId } },
    { new: true }
  );
};