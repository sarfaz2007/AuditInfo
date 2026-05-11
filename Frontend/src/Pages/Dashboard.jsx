import { useEffect, useState } from "react";


import {
  BookOutlined,
  BankOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import API from "../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCategories: 0,
    totalCourses: 0,
    totalColleges: 0,
    recentCourses: [],
  });

  const fetchDashboard = async () => {
    try {
      const { data } = await API.get("/dashboard");
      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const chartData = [
    { name: "Categories", total: stats.totalCategories },
    { name: "Courses", total: stats.totalCourses },
    { name: "Colleges", total: stats.totalColleges },
  ];

  const colors = ["#3B82F6", "#10B981", "#8B5CF6"];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Categories</p>
            <h1 className="text-3xl font-bold mt-2">
              {stats.totalCategories}
            </h1>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <AppstoreOutlined className="text-2xl text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Courses</p>
            <h1 className="text-3xl font-bold mt-2">
              {stats.totalCourses}
            </h1>
          </div>
          <div className="bg-green-100 p-4 rounded-xl">
            <BookOutlined className="text-2xl text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Colleges</p>
            <h1 className="text-3xl font-bold mt-2">
              {stats.totalColleges}
            </h1>
          </div>
          <div className="bg-purple-100 p-4 rounded-xl">
            <BankOutlined className="text-2xl text-purple-600" />
          </div>
        </div>

      </div>

      {/* GRAPH */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="mb-6">
          <h2 className="text-xl font-bold">System Analytics</h2>
          <p className="text-gray-500 text-sm mt-1">
            Overview of system data
          </p>
        </div>

        {/* CENTERED SMALL GRAPH */}
        <div className="flex justify-center">
          <ResponsiveContainer width="75%" height={300}>
            <BarChart data={chartData}>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="total" radius={[12, 12, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>

            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* RECENT COURSES */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="mb-6">
          <h2 className="text-xl font-bold">Recent Courses</h2>
          <p className="text-gray-500 text-sm mt-1">
            Latest added courses
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Course</th>
                <th className="text-left py-3">Category</th>
              </tr>
            </thead>

            <tbody>
              {stats.recentCourses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4">{course.name}</td>
                  <td className="py-4">{course.category?.name}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;