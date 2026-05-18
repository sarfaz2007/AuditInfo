import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  BookOutlined,
  BankOutlined,
  DashboardOutlined,
   LogoutOutlined
} from '@ant-design/icons';

import { Button, Layout, Menu, theme ,Modal } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // ✅ LOGOUT FUNCTION
const handleLogout = () => {
  Modal.confirm({
    title: "Logout",
    content: "Are you sure you want to logout?",
    okText: "Yes",
    cancelText: "No",

    onOk() {
      localStorage.removeItem("token");
      navigate("/admin/login");
    },

    onCancel() {
      console.log("Cancelled");
    },
  });
};

  return (
    <Layout style={{ minHeight: '100vh' }}>

      {/* SIDEBAR */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Admin
        </div>

        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
              onClick: () => navigate('/admin'),
            },
            {
              key: '2',
              icon: <AppstoreOutlined />,
              label: 'Categories',
              onClick: () => navigate('/admin/categories'),
            },
            {
              key: '3',
              icon: <BookOutlined />,
              label: 'Courses',
              onClick: () => navigate('/admin/courses'),
            },
            {
              key: '4',
              icon: <BankOutlined />,
              label: 'Colleges',
              onClick: () => navigate('/admin/colleges'),
            },

            // ✅ LOGOUT MENU
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: 'Logout',
              danger: true,
              onClick: handleLogout,
            },
          ]}
        />
      </Sider>

      {/* MAIN LAYOUT */}
      <Layout>

        {/* HEADER */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 20,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          {/* ✅ LOGOUT BUTTON */}
          {/* <Button danger onClick={handleLogout}>
            Logout
          </Button> */}
        </Header>

        {/* CONTENT */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>

      </Layout>

    </Layout>
  );
};

export default AdminLayout;