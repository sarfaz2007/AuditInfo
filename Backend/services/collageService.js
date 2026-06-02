import College from "../models/Collage.js";

// CREATE
export const createCollege = (data) =>
  College.create(data);

// GET ALL COLLEGES
export const getColleges = () =>
  College.find().populate("courses");

// ADD COURSE TO COLLEGE
export const addCourseToCollege = async (
  collegeId,
  courseId
) => {
  return College.findByIdAndUpdate(
    collegeId,
    {
      $push: { courses: courseId },
    },
    {
      new: true,
    }
  );
};

// UPDATE
export const updateCollegeById = (
  id,
  data
) =>
  College.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

// DELETE
export const deleteCollegeById = (id) =>
  College.findByIdAndDelete(id);

// GET COLLEGES BY COURSE
export const getCollegesByCourse = (
  courseId
) =>
  College.find({
    courses: courseId,
  }).populate("courses");