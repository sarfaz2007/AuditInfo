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

// UPDATE
export const updateCollegeById = (id, data) =>
  College.findByIdAndUpdate(id, data, { new: true });

// DELETE
export const deleteCollegeById = (id) =>
  College.findByIdAndDelete(id);