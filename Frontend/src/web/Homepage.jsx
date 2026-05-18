import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  BookOpen,
  School,
  Search,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Navbar from "../web/Components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const quickAccess = [
    {
      title: "Categories",
      desc: "Browse different categories",
      icon: <LayoutGrid className="w-7 h-7" />,
      link: "/categories",
      color: "bg-blue-100 text-blue-600",
      hover: "hover:border-blue-200",
    },

    {
      title: "Courses",
      desc: "Explore courses available",
      icon: <BookOpen className="w-7 h-7" />,
      link: "/courses/1",
      color: "bg-indigo-100 text-indigo-600",
      hover: "hover:border-indigo-200",
    },

    {
      title: "College Info",
      desc: "View college information",
      icon: <School className="w-7 h-7" />,
      link: "/college",
      color: "bg-purple-100 text-purple-600",
      hover: "hover:border-purple-200",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50/50">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Welcome Hero Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-14 shadow-sm mb-12"
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
              
              <div className="max-w-xl text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
                >
                  Welcome, <span className="text-blue-600">User</span> 👋
                </motion.h1>

                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Find courses and colleges easily. Your one-stop destination
                  for auditing academic paths and professional growth.
                </p>

                {/* Search Box */}
                <div className="relative group max-w-md mx-auto md:mx-0">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />

                  <input
                    type="text"
                    placeholder="What do you want to learn today?"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Right Side Illustration */}
              <motion.div
                initial={{ opacity: 0, rotate: 5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex flex-1 justify-end"
              >
                <div className="relative w-64 h-64 bg-blue-50 rounded-full flex items-center justify-center">
                  <School
                    size={120}
                    className="text-blue-200"
                    strokeWidth={1}
                  />

                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-200 rounded-full animate-bounce" />
                </div>
              </motion.div>
            </div>

            {/* Background Blur Effects */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-0" />

            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-indigo-50 rounded-full blur-3xl -z-0" />
          </motion.div>

          {/* Quick Access */}
          <section>
            <div className="flex items-center gap-3 mb-8 px-2">
              <h2 className="text-2xl font-bold text-slate-800">
                Quick Access
              </h2>

              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickAccess.map((item, index) => (
                <motion.div
                  key={item.title}
                  onClick={() => navigate(item.link)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5 }}
                  className={`group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer ${item.hover} hover:shadow-xl hover:shadow-gray-200/50`}
                >
                  <div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                    Get Started <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;