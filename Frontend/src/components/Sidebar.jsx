// import {
//   DashboardOutlined,
//   AppstoreOutlined,
//   BookOutlined,
//   BankOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";

// import { Layout, Menu } from "antd";
// import { useNavigate } from "react-router-dom";

// const { Sider } = Layout;

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <Sider>
//       <div
//         style={{
//           color: "white",
//           textAlign: "center",
//           padding: 20,
//           fontSize: 20,
//           fontWeight: "bold",
//         }}
//       >
//         Audit Admin
//       </div>

//       <Menu
//         theme="dark"
//         mode="inline"
//         onClick={({ key }) => {
//           if (key === "logout") {
//             logout();
//           } else {
//             navigate(key);
//           }
//         }}
//         items={[
//           {
//             key: "/",
//             icon: <DashboardOutlined />,
//             label: "Dashboard",
//           },
//           {
//             key: "/categories",
//             icon: <AppstoreOutlined />,
//             label: "Categories",
//           },
//           {
//             key: "/courses",
//             icon: <BookOutlined />,
//             label: "Courses",
//           },
//           {
//             key: "/colleges",
//             icon: <BankOutlined />,
//             label: "Colleges",
//           },
//           {
//             key: "logout",
//             icon: <LogoutOutlined />,
//             label: "Logout",
//           },
//         ]}
//       />
//     </Sider>
//   );
// };

// export default Sidebar;