import { useState } from "react";
import { Card, Form, Input, Button, message } from "antd";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const { data } = await API.post("/auth/login", values);

      localStorage.setItem("token", data.token);

      message.success("Login Success");

      navigate("/");
    } catch (err) {
      message.error(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card title="Admin Login" style={{ width: 400 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block loading={loading}>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;