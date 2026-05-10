import Category from "../models/Category.js";
import Course from "../models/Course.js";
import College from "../models/Collage.js";

export const getDashboardStats = async (req, res) => {
  try {
    // COUNTS
    const totalCategories = await Category.countDocuments();

    const totalCourses = await Course.countDocuments();

    const totalColleges = await College.countDocuments();

    // RECENT COURSES
    const recentCourses = await Course.find()
      .populate("category")
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalCategories,
      totalCourses,
      totalColleges,
      recentCourses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Dashboard Fetch Failed",
    });
  }
};