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

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    try {
      const collegeRes = await API.get("/colleges");
      const courseRes = await API.get("/courses");

      setColleges(collegeRes.data);
      setCourses(courseRes.data);
    } catch (err) {
      message.error("Failed to load data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = async (values) => {
    try {
      await API.post("/colleges", values);

      message.success("College Added");

      setOpen(false);

      fetchData();
    } catch {
      message.error("Failed");
    }
  };

  const columns = [
    {
      title: "College",
      dataIndex: "name",
    },
    {
      title: "Courses",
      render: (_, record) =>
        record.courses?.map((c) => c.name).join(", "),
    },
  ];

  return (
    <Card
      title="Colleges"
      extra={<Button onClick={() => setOpen(true)}>Add</Button>}
    >
      <Table
        dataSource={colleges}
        columns={columns}
        rowKey="_id"
      />

      <Modal
        title="Add College"
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="College Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Enter college name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Courses"
            name="courses"
            rules={[
              {
                required: true,
                message: "Select courses",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select Courses"
            >
              {courses.map((course) => (
                <Select.Option
                  key={course._id}
                  value={course._id}
                >
                  {course.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
          >
            Save
          </Button>
        </Form>
      </Modal>
    </Card>
  );
};

export default Colleges;