import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Content style={{ padding: 20 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;