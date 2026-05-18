import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  BookOpen,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },

    { name: "Categories", href: "/categories" },

    { name: "Courses", href: "/courses/123" },

    { name: "College", href: "/college" },
  ];
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-200">
              <BookOpen className="text-white w-6 h-6" />
            </div>

            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Course Audit
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  {link.name}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-gray-50 border border-transparent hover:border-gray-100">
              <User size={18} />

              <span className="font-medium text-sm">
                Profile
              </span>
            </button>

            <button
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all px-4 py-2 rounded-full hover:bg-red-50 border border-transparent hover:border-red-100"
            >
              <LogOut size={18} />

              <span className="font-medium text-sm">
                Logout
              </span>
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}

              <hr className="my-2 border-gray-100" />

              <button className="w-full text-left px-3 py-3 text-base font-medium text-red-500">
                Logout
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;