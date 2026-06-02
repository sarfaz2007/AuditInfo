import React, { useEffect, useState } from "react";

import API from "../api/axios";

import {
  School,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import Navbar from "./Components/Navbar";

const College = () => {

  const [colleges, setColleges] = useState([]);

  const [loading, setLoading] = useState(false);

  // FETCH COLLEGES
  const fetchColleges = async () => {

    try {

      setLoading(true);

      const response = await API.get("/colleges");

      console.log(response.data);

      setColleges(response.data || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f5f7fb]">

        {/* HEADER */}
        <div className="bg-white border-b border-gray-100">

          <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold text-slate-900">
              Colleges
            </h1>

            <p className="text-gray-500 mt-2">
              Explore top colleges and available courses
            </p>

          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-10">

          {loading ? (

            <div className="text-center py-20 text-gray-500">
              Loading colleges...
            </div>

          ) : colleges.length === 0 ? (

            <div className="text-center py-20 text-gray-400">
              No colleges found
            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

              {colleges.map((college) => (

                <div
                  key={college._id}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >

                  {/* TOP */}
                  <div className="h-40 bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center relative">

                    <School
                      className="text-white/20 w-24 h-24"
                    />

                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs">
                      College
                    </div>

                  </div>

                  {/* BODY */}
                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-slate-800">
                      {college.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                      <GraduationCap size={16} />
                      Available Courses
                    </div>

                    {/* COURSES */}
                    <div className="mt-5 flex flex-wrap gap-2">

                      {college.courses?.map((course) => (

                        <div
                          key={course._id}
                          className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-xl text-sm"
                        >
                          <BookOpen size={14} />

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