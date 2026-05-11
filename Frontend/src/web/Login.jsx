import React, { useState } from 'react';
import { User, Lock, GraduationCap, BookOpen } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="bg-white w-full max-w-sm rounded-2xl border border-gray-200 p-8 shadow-sm">
        
        {/* Header Illustration */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            {/* Mortarboard Icon */}
            <GraduationCap size={48} className="text-slate-600 mb-[-12px] relative z-10" strokeWidth={1.5} />
            {/* Book Icon */}
            <BookOpen size={44} className="text-blue-400" strokeWidth={1.5} />
          </div>
          
          <h1 className="mt-4 text-2xl font-bold text-slate-900 tracking-tight">
            Welcome Back!
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={20} className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="email"
              placeholder="Enter email"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={20} className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 mt-2 shadow-md shadow-blue-100"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          <span className="text-slate-600 font-medium">Don't have an account? </span>
          <button className="text-blue-600 font-bold hover:underline ml-1">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;