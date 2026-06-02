import React, { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "./Components/Navbar";

import {
  BookOpen,
  Clock,
  User,
  Sparkles,
} from "lucide-react";

const AllCoursesPage = () => {

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(false);

  // FETCH COURSES
  const fetchCourses = async () => {

    try {

      setLoading(true);

      const response = await API.get("/courses");

      setCourses(response.data || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f5f7fb]">

        {/* HERO */}
        <section className="relative overflow-hidden">

          {/* BLUR BACKGROUNDS */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />

          <div className="absolute right-0 top-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 pt-10 pb-6 relative z-10">

            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">

              {/* FLOATING EFFECT */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

              <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm mb-5 backdrop-blur-md">
                  <Sparkles size={16} />
                  Premium Learning Platform
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Explore All Courses
                </h1>

                <p className="text-blue-100 mt-5 text-lg max-w-2xl leading-relaxed">
                  Discover high-quality professional courses designed
                  to help students improve skills and build careers.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="max-w-7xl mx-auto px-6 py-10">

          {loading ? (

            <div className="text-center py-24 text-gray-500 text-lg">
              Loading courses...
            </div>

          ) : courses.length === 0 ? (

            <div className="bg-white rounded-3xl border border-gray-100 py-24 text-center text-gray-400 shadow-sm">
              No courses found
            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {courses.map((course) => (

                <div
                  key={course._id}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >

                  {/* TOP SECTION */}
                  <div className="relative h-44 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden">

                    <BookOpen
                      className="w-20 h-20 text-white/20"
                    />

                    {/* CATEGORY BADGE */}
                    <div className="absolute top-4 left-4 bg-white/15 border border-white/10 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      {course.category?.name || "Course"}
                    </div>

                  </div>

                  {/* BODY */}
                  <div className="p-7">

                    <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </h2>

                    {/* DETAILS */}
                    <div className="flex items-center gap-5 mt-5 text-gray-500 text-sm">

                      <div className="flex items-center gap-1">
                        <User size={15} />
                        Expert Mentor
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock size={15} />
                        12 Weeks
                      </div>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-5 text-gray-600 leading-relaxed text-sm">
                      Learn {course.name} with real-world projects,
                      expert guidance, and practical examples designed
                      for modern students.
                    </p>

                    {/* BUTTON */}
                    <button className="w-full mt-7 bg-slate-900 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold transition-all duration-300">
                      View Course
                    </button>

                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default AllCoursesPage;