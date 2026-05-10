import { useEffect, useState } from "react";

import {
  Table,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  message,
} from "antd";

import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import API from "../api/axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  // FETCH DATA
  const fetchData = async () => {
    setLoading(true);

    try {
      const courseRes = await API.get("/courses");

      const categoryRes = await API.get("/categories");

      setCourses(courseRes.data);

      setCategories(categoryRes.data);
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
        await API.put(`/courses/${editingId}`, values);

        message.success("Course Updated");
      } else {
        await API.post("/courses", values);

        message.success("Course Added");
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
      category: record.category?._id,
    });

    setOpen(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/courses/${id}`);

      message.success("Course Deleted");

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
      title: "Course Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Category",
      key: "category",

      render: (_, record) => record.category?.name,
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
            title="Delete Course?"
            description="Are you sure to delete this course?"
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
              Courses
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage all courses
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
            Add Course
          </button>
        </div>

        {/* TABLE */}
        <Table
          columns={columns}
          dataSource={courses}
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
            {editingId ? "Edit Course" : "Add Course"}
          </h2>

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            {/* COURSE NAME */}
            <Form.Item
              label="Course Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter course name",
                },
              ]}
            >
              <Input
                placeholder="Enter course name"
                className="h-11 rounded-lg"
              />
            </Form.Item>

            {/* CATEGORY */}
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please select category",
                },
              ]}
            >
              <Select
                placeholder="Select Category"
                className="h-11"
              >
                {categories.map((cat) => (
                  <Select.Option
                    key={cat._id}
                    value={cat._id}
                  >
                    {cat.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-xl transition"
            >
              {editingId ? "Update Course" : "Save Course"}
            </button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Courses;