import React, { useEffect, useState } from "react";

import {
  Folder,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Navbar from "./Components/Navbar";

import API from "../api/axios";

const CategoriesPage = () => {

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // FETCH CATEGORIES
  const fetchCategories = async () => {
    try {

      setLoading(true);

      const response = await API.get("/categories");

      console.log(response.data);

      setCategories(response.data || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">

        {/* MAIN CONTAINER */}
        <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

          {/* CONTENT */}
          <main className="p-8 md:p-10">

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              All Categories
            </h2>

            {/* LOADING */}
            {loading ? (

              <div className="text-center py-10 text-gray-500">
                Loading categories...
              </div>

            ) : (

              <>
                {/* CATEGORY LIST */}
                <div className="space-y-3">

                  {categories.length > 0 ? (

                    categories.map((category) => (

                      <div
                        key={category._id}

                        // NAVIGATE WITH CATEGORY ID
                        onClick={() =>
                          navigate(
                            `/courses/${category._id}`
                          )
                        }

                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                      >
                        {/* LEFT */}
                        <div className="flex items-center gap-4">

                          <div className="p-1">
                            <Folder
                              size={22}
                              className="text-gray-400 group-hover:text-blue-500 transition-colors"
                            />
                          </div>

                          <span className="text-slate-700 font-medium">
                            {category.name}
                          </span>
                        </div>

                        {/* RIGHT */}
                        <ChevronRight
                          size={20}
                          className="text-gray-400"
                        />
                      </div>
                    ))

                  ) : (

                    <div className="text-center py-10 text-gray-400">
                      No categories found
                    </div>

                  )}
                </div>
              </>
            )}

            {/* FOOTER */}
            <div className="mt-8">

              <button
                onClick={() => navigate("/")}

                className="flex items-center gap-2 px-4 py-2.5 bg-[#f0f5ff] border border-blue-100 text-blue-700 rounded-md text-sm font-semibold hover:bg-blue-100 transition-colors"
              >
                <ArrowLeft
                  size={16}
                  strokeWidth={3}
                />

                Back to Home
              </button>

            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;