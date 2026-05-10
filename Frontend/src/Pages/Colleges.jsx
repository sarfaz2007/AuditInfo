import { useEffect, useState } from "react";

import {
  Table,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  Tag,
  message,
} from "antd";

import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import API from "../api/axios";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [courses, setCourses] = useState([]);

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  // FETCH DATA
  const fetchData = async () => {
    setLoading(true);

    try {
      const collegeRes = await API.get("/colleges");

      const courseRes = await API.get("/courses");

      setColleges(collegeRes.data);

      setCourses(courseRes.data);
    } catch (error) {
      message.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ADD / UPDATE
  const onFinish = async (values) => {
    try {
      if (editingId) {
        await API.put(`/colleges/${editingId}`, values);

        message.success("College Updated");
      } else {
        await API.post("/colleges", values);

        message.success("College Added");
      }

      handleCancel();

      fetchData();
    } catch (error) {
      message.error("Operation Failed");
    }
  };

  // EDIT
  const handleEdit = (record) => {
    setEditingId(record._id);

    form.setFieldsValue({
      name: record.name,
      courses: record.courses?.map((c) => c._id),
    });

    setOpen(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/colleges/${id}`);

      message.success("College Deleted");

      fetchData();
    } catch (error) {
      message.error("Delete Failed");
    }
  };

  // CLOSE MODAL
  const handleCancel = () => {
    setOpen(false);

    setEditingId(null);

    form.resetFields();
  };

  // TABLE COLUMNS
  const columns = [
    {
      title: "College Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Courses",
      key: "courses",

      render: (_, record) => (
        <div className="flex flex-wrap gap-2">
          {record.courses?.map((course) => (
            <Tag color="blue" key={course._id}>
              {course.name}
            </Tag>
          ))}
        </div>
      ),
    },

    {
      title: "Actions",
      key: "actions",

      render: (_, record) => (
        <div className="flex gap-3">
          {/* EDIT */}
          <button
            onClick={() => handleEdit(record)}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            <EditOutlined />
            Edit
          </button>

          {/* DELETE */}
          <Popconfirm
            title="Delete College?"
            description="Are you sure to delete this college?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
              <DeleteOutlined />
              Delete
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Colleges
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage all colleges
            </p>
          </div>

          {/* ADD BUTTON */}
          <button
            onClick={() => {
              setOpen(true);

              setEditingId(null);

              form.resetFields();
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-xl transition"
          >
            <PlusOutlined />
            Add College
          </button>
        </div>

        {/* TABLE */}
        <Table
          columns={columns}
          dataSource={colleges}
          rowKey="_id"
          loading={loading}
          pagination={{
            pageSize: 5,
          }}
        />
      </div>

      {/* MODAL */}
      <Modal
        open={open}
        footer={null}
        onCancel={handleCancel}
        centered
      >
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-6">
            {editingId ? "Edit College" : "Add College"}
          </h2>

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            {/* COLLEGE NAME */}
            <Form.Item
              label="College Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter college name",
                },
              ]}
            >
              <Input
                placeholder="Enter college name"
                className="h-11 rounded-lg"
              />
            </Form.Item>

            {/* COURSES */}
            <Form.Item
              label="Courses"
              name="courses"
              rules={[
                {
                  required: true,
                  message: "Please select courses",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select Courses"
                className="min-h-11"
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-xl transition"
            >
              {editingId ? "Update College" : "Save College"}
            </button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Colleges;