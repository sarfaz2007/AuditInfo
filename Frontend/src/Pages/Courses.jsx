import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Table,
  message,
} from "antd";

import API from "../api/axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    const courseRes = await API.get("/courses");
    const categoryRes = await API.get("/categories");

    setCourses(courseRes.data);
    setCategories(categoryRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = async (values) => {
    try {
      await API.post("/courses", values);
      message.success("Course Added");
      setOpen(false);
      fetchData();
    } catch {
      message.error("Failed");
    }
  };

  const columns = [
    {
      title: "Course",
      dataIndex: "name",
    },
    {
      title: "Category",
      render: (_, record) => record.category?.name,
    },
  ];

  return (
    <Card
      title="Courses"
      extra={<Button onClick={() => setOpen(true)}>Add</Button>}
    >
      <Table dataSource={courses} columns={columns} rowKey="_id" />

      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Course Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select>
              {categories.map((cat) => (
                <Select.Option key={cat._id} value={cat._id}>
                  {cat.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Save
          </Button>
        </Form>
      </Modal>
    </Card>
  );
};

export default Courses;