import React, { useState } from 'react';
import { Mail, Lock, CheckCircle, ArrowRight, GraduationCap, BarChart3, ShieldCheck } from 'lucide-react';

const AuditLoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", formData);
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* LEFT SIDE: Visual/Branding Section (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-900 relative overflow-hidden flex-col justify-center p-16">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-700 rounded-full opacity-30 blur-3xl"></div>

        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md">
              <GraduationCap className="text-white" size={32} />
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">EduAudit Pro</span>
          </div>

          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Your Academic <br /> 
            <span className="text-blue-400 font-serif italic">Path, Optimized.</span>
          </h1>
          
          <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
            Access your comprehensive course audit dashboard. Track degree progress, verify credits, and plan your next semester with data-driven insights.
          </p>

          {/* Feature List Graphic */}
          <div className="space-y-4">
            {[
              { icon: <CheckCircle size={20}/>, text: "Real-time Credit Tracking" },
              { icon: <BarChart3 size={20}/>, text: "Automated Degree Mapping" },
              { icon: <ShieldCheck size={20}/>, text: "Official Registrar Compliance" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-indigo-100/80 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                <span className="text-blue-400">{item.icon}</span>
                <span className="font-medium text-sm italic">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Brand Credit */}
        <div className="absolute bottom-10 left-16 text-indigo-300 text-xs tracking-widest uppercase">
          © 2024 University Academic Services
        </div>
      </div>

      {/* RIGHT SIDE: Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50 lg:bg-white">
        <div className="w-full max-w-md">
          {/* Logo for Mobile only */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <GraduationCap className="text-indigo-900" size={40} />
            <span className="text-indigo-900 font-bold text-2xl">EduAudit</span>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h2>
            <p className="text-slate-500">Enter your credentials to access the audit portal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Academic Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="student.name@university.edu"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all shadow-sm"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-800">Forgot Password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all shadow-sm"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <label htmlFor="remember" className="text-sm text-slate-600">Keep me logged in on this device</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
            >
              Enter Dashboard
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Registration Footer */}
          <div className="mt-12 text-center border-t border-slate-100 pt-8">
            <p className="text-slate-500">
              New student or faculty member? <br className="md:hidden" />
              <button className="text-indigo-600 font-bold hover:underline ml-1">Create an account</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLoginPage;