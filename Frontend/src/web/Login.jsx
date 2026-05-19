import React, { useState } from "react";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BookOpenCheck,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA:", formData); // 🔥 debug

    try {
      setLoading(true);

      /* ================= LOGIN ================= */
      if (isLogin) {
        const res = await API.post("/web-auth/login", {
          email: formData.email.trim(),
          password: formData.password.trim(),
        });

        console.log(res.data);

        localStorage.setItem("webToken", res.data.token);

        alert("Login Successful");

        navigate("/");
      }

      /* ================= SIGNUP ================= */
      else {
        const res = await API.post("/web-auth/signup", {
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password.trim(),
        });

        console.log(res.data);

        alert("Signup Successful");

        setIsLogin(true);

        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 p-14">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between h-full">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl">
              <GraduationCap className="text-white" size={32} />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-white">
                Course Audit
              </h1>
              <p className="text-blue-200 text-sm">
                Academic Intelligence Platform
              </p>
            </div>
          </motion.div>

          <div className="max-w-xl">
            <h2 className="text-6xl font-black text-white mb-8">
              Build Your
              <span className="block text-blue-400">Future Smarter.</span>
            </h2>

            <p className="text-slate-300 mb-12">
              Discover colleges, explore courses, and manage academic journey.
            </p>

            <div className="space-y-5">
              {[
                { icon: <BookOpenCheck size={20} />, title: "Smart Courses" },
                { icon: <ShieldCheck size={20} />, title: "Secure System" },
                { icon: <Sparkles size={20} />, title: "Modern Dashboard" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl"
                >
                  <div className="text-blue-300">{item.icon}</div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm text-slate-400">
            © 2026 Course Audit
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-6">

        <motion.div className="w-full max-w-md">

          <div className="bg-white/70 backdrop-blur-2xl border rounded-[2rem] p-8 shadow-2xl">

            {/* TOGGLE */}
            <div className="flex bg-slate-100 p-1 rounded-2xl mb-8">

              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-xl font-semibold ${
                  isLogin ? "bg-white text-indigo-700 shadow" : "text-slate-500"
                }`}
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-xl font-semibold ${
                  !isLogin ? "bg-white text-indigo-700 shadow" : "text-slate-500"
                }`}
              >
                Sign Up
              </button>
            </div>

            <h2 className="text-3xl font-black text-center mb-2">
              {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
            </h2>

            <p className="text-center text-slate-500 mb-6">
              {isLogin ? "Login to continue" : "Join the platform"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <AnimatePresence>
                {!isLogin && (
                  <motion.div>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full pl-12 py-4 rounded-2xl border"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 py-4 rounded-2xl border"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex justify-center gap-2"
              >
                {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
                <ArrowRight />
              </button>
            </form>

            <p className="text-center mt-6 text-sm">
              {isLogin ? "New user?" : "Already have account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-indigo-600 font-bold ml-2"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;