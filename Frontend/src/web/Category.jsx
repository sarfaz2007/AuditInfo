import React from 'react';
import { Folder, ChevronRight, UserCircle, ArrowLeft } from 'lucide-react';
import Navbar from './Components/Navbar';

const CategoriesPage = () => {
  const categories = [
    "Computer Science",
    "Commerce",
    "Science",
    "Arts",
    "Management"
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        

        {/* Content Section */}
        <main className="p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">All Categories</h2>

          {/* Categories List */}
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-1">
                    <Folder size={22} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <span className="text-slate-700 font-medium">{category}</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="mt-8">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#f0f5ff] border border-blue-100 text-blue-700 rounded-md text-sm font-semibold hover:bg-blue-100 transition-colors">
              <ArrowLeft size={16} strokeWidth={3} />
              
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