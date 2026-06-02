import React, { useEffect, useState } from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import API from "../api/axios";

import {
  BookOpen,
  Clock3,
  Users,
  Star,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const CoursesPage = () => {

  const { categoryId } = useParams();

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH COURSES
  const fetchCourses = async () => {
    try {

      setLoading(true);

      const response = await API.get(
        `/courses/category/${categoryId}`
      );

      setCourses(response.data || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-white mb-4 backdrop-blur-sm">

                <GraduationCap size={16} />

                <span className="text-sm font-medium">
                  Professional Courses
                </span>

              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">

                Learn New Skills &
                Build Your Career

              </h1>

              <p className="text-indigo-100 mt-3 text-sm md:text-base leading-relaxed">

                Discover industry-focused courses with
                hands-on learning and expert mentorship.

              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="flex gap-4 flex-wrap">

              <div className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-4 rounded-2xl min-w-[120px]">

                <h2 className="text-2xl font-bold text-white">
                  {courses.length}+
                </h2>

                <p className="text-indigo-100 text-xs mt-1">
                  Courses
                </p>

              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-4 rounded-2xl min-w-[120px]">

                <h2 className="text-2xl font-bold text-white">
                  4.9★
                </h2>

                <p className="text-indigo-100 text-xs mt-1">
                  Rating
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-2xl font-bold text-gray-900">
              Featured Courses
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Explore top learning programs
            </p>

          </div>

          <Link
            to="/categories"

            className="flex items-center gap-2 bg-white border border-gray-200 hover:border-indigo-300 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:shadow-md transition"
          >
            Categories

            <ArrowRight size={16} />
          </Link>
        </div>

        {/* LOADING */}
        {loading ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3, 4, 5, 6].map((item) => (

              <div
                key={item}

                className="bg-white rounded-3xl overflow-hidden border animate-pulse"
              >
                <div className="h-44 bg-gray-200"></div>

                <div className="p-5">

                  <div className="h-5 bg-gray-200 rounded mb-4"></div>

                  <div className="h-4 bg-gray-100 rounded mb-2"></div>

                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>

                </div>
              </div>
            ))}
          </div>

        ) : courses.length === 0 ? (

          <div className="bg-white rounded-3xl border py-20 text-center">

            <BookOpen
              size={50}
              className="mx-auto text-indigo-500 mb-4"
            />

            <h2 className="text-2xl font-bold text-gray-800">
              No Courses Found
            </h2>

            <p className="text-gray-500 mt-2">
              No courses available in this category
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {courses.map((course) => (

              <div
                key={course._id}

                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* TOP */}
                <div className="relative h-44 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center overflow-hidden">

                  <div className="absolute w-40 h-40 bg-white/20 rounded-full blur-3xl -top-10 -left-10"></div>

                  <BookOpen
                    size={55}
                    className="text-white relative z-10"
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-4 left-4 bg-white/15 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full">

                    <span className="text-xs font-semibold text-white">
                      {course.category?.name || "Course"}
                    </span>

                  </div>
                </div>

                {/* BODY */}
                <div className="p-6">

                  {/* TITLE */}
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">

                    {course.name}

                  </h2>

                  {/* META */}
                  <div className="flex items-center gap-4 flex-wrap mt-4 text-gray-500 text-sm">

                    <div className="flex items-center gap-1">

                      <Clock3 size={15} />

                      <span>12 Weeks</span>

                    </div>

                    <div className="flex items-center gap-1">

                      <Users size={15} />

                      <span>2k Students</span>

                    </div>

                    <div className="flex items-center gap-1 text-yellow-500">

                      <Star
                        size={15}
                        fill="currentColor"
                      />

                      <span>4.9</span>

                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-sm leading-relaxed mt-4">

                    Learn
                    {` ${course.name} `}
                    with practical projects,
                    expert guidance, and real-world skills.

                  </p>

                  {/* BUTTON */}
                  <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2">

                    Explore Colleges

                    <ArrowRight size={16} />

                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;