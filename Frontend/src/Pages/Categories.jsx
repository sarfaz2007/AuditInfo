import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Space,
  Table,
  message,
} from "antd";

import API from "../api/axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    const { data } = await API.get("/categories");
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = async (values) => {
    try {
      await API.post("/categories", values);
      message.success("Category Added");
      setOpen(false);
      fetchData();
    } catch {
      message.error("Failed");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
  ];

  return (
    <Card
      title="Categories"
      extra={<Button onClick={() => setOpen(true)}>Add</Button>}
    >
      <Table dataSource={categories} columns={columns} rowKey="_id" />

      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Category Name" name="name">
            <Input />
          </Form.Item>

          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Space>
        </Form>
      </Modal>
    </Card>
  );
};

export default Categories;