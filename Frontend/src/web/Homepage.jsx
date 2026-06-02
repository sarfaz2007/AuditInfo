import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  BookOpen,
  School,
  ChevronRight,
  Sparkles,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../web/Components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const quickAccess = [
    {
      title: "Categories",
      desc: "Browse all academic categories",
      icon: <LayoutGrid className="w-7 h-7" />,
      link: "/categories",
      color: "from-blue-500 to-cyan-500",
      light: "bg-blue-50 text-blue-600",
    },
    {
      title: "Courses",
      desc: "Explore trending courses",
      icon: <BookOpen className="w-7 h-7" />,
      link: "/courses",
      color: "from-indigo-500 to-purple-500",
      light: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "College Info",
      desc: "Find top colleges easily",
      icon: <School className="w-7 h-7" />,
      link: "/college",
      color: "from-purple-500 to-pink-500",
      light: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f7fb] overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative">
          {/* BACKGROUND BLURS */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute right-0 top-20 w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-3xl" />

          <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] p-8 md:p-14 shadow-2xl"
            >
              {/* FLOATING ELEMENTS */}
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14">
                {/* LEFT CONTENT */}
                <div className="max-w-2xl">
                  {/* BADGE */}
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Sparkles size={16} />
                    Future Learning Platform
                  </div>

                  {/* TITLE */}
                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight"
                  >
                    Learn Smarter.
                    <br />
                    Build Your
                    <span className="text-cyan-300"> Future.</span>
                  </motion.h1>

                  {/* SUBTEXT */}
                  <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
                    Discover premium courses, colleges, and career paths
                    designed to help students grow faster and smarter.
                  </p>

                  {/* BUTTONS - Increased margin top since Search is gone */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      onClick={() => navigate("/categories")}
                      className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95"
                    >
                      Explore Categories
                    </button>
                    <button
                      onClick={() => navigate("/college")}
                      className="bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-bold transition-all active:scale-95"
                    >
                      View Colleges
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE (Visual Decor) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:flex relative"
                >
                  <div className="relative w-[350px] h-[350px] rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl">
                    <GraduationCap
                      size={140}
                      className="text-white/90"
                      strokeWidth={1.3}
                    />

                    {/* FLOATING STATS */}
                    <div className="absolute -top-4 left-0 bg-white rounded-2xl px-5 py-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                          <TrendingUp className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">1200+</h3>
                          <p className="text-xs text-gray-500">Active Students</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-2 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center">
                          <BookOpen className="text-indigo-600" size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">250+</h3>
                          <p className="text-xs text-gray-500">Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* QUICK ACCESS SECTION */}
            <section className="mt-14">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Quick Access
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Everything you need in one place
                  </p>
                </div>
                <div className="hidden md:block h-px w-40 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {quickAccess.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -8 }}
                    onClick={() => navigate(item.link)}
                    className="group relative overflow-hidden bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.color}`} />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${item.light} group-hover:bg-white/20 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all`}>
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 group-hover:text-white/80 mt-3 leading-relaxed transition-colors">
                        {item.desc}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold transition-all">
                        Explore
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>
        </section>
      </div>
    </>
  );
};

export default Home;