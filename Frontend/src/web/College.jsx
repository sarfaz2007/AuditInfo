import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";
import Navbar from "./Components/Navbar";
import {
  School,
  BookOpen,
  ArrowLeft,
  GraduationCap,
} from "lucide-react";

const College = () => {
  const { courseId } = useParams();

  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchColleges = async () => {
    try {
      setLoading(true);

      console.log("Course ID:", courseId);

      const response = await API.get(
        `/colleges/course/${courseId}`
      );

      console.log("Response:", response.data);

      setColleges(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, [courseId]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f5f7fb]">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600">

          <div className="max-w-7xl mx-auto px-6 py-12">

            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-white mb-6"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

            <h1 className="text-4xl font-bold text-white">
              Colleges Offering This Course
            </h1>

            <p className="text-indigo-100 mt-2">
              Explore colleges where this course is available.
            </p>

          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-10">

          {loading ? (

            <div className="text-center py-20 text-lg">
              Loading Colleges...
            </div>

          ) : colleges.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-sm py-20 text-center">

              <School
                className="mx-auto text-indigo-500"
                size={60}
              />

              <h2 className="text-2xl font-bold mt-5">
                No Colleges Found
              </h2>

              <p className="text-gray-500 mt-2">
                No colleges provide this course.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

              {colleges.map((college) => (

                <div
                  key={college._id}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition"
                >

                  {/* Top */}
                  <div className="h-44 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex justify-center items-center">

                    <School
                      className="text-white"
                      size={60}
                    />

                  </div>

                  {/* Body */}
                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-gray-900">
                      {college.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-3 text-gray-500">
                      <GraduationCap size={18} />
                      Available Courses
                    </div>

                    <div className="mt-5 space-y-3">

                      {college.courses.map((course) => (

                        <div
                          key={course._id}
                          className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-3 rounded-xl"
                        >
                          <BookOpen size={16} />

                          {course.name}
                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </>
  );
};

export default College;