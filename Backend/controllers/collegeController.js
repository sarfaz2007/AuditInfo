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
// UPDATE
export const updateCollege = async (req, res, next) => {
  try {
    const data = await service.updateCollegeById(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "College updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteCollege = async (req, res, next) => {
  try {
    await service.deleteCollegeById(req.params.id);

    res.json({
      success: true,
      message: "College deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// GET COLLEGES BY COURSE
export const getCollegesByCourse = async (
  req,
  res,
  next
) => {
  try {

    const data =
      await service.getCollegesByCourse(
        req.params.courseId
      );

    res.json(data);

  } catch (err) {

    next(err);
  }
};
