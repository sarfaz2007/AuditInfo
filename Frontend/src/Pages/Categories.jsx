import { useEffect, useState } from "react";
import {
  Table,
  Modal,
  Form,
  Input,
  Popconfirm,
  message,
} from "antd";

import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import API from "../api/axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  // FETCH ALL CATEGORIES
  const fetchData = async () => {
    setLoading(true);

    try {
      const { data } = await API.get("/categories");

      setCategories(data);
    } catch (error) {
      message.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ADD / UPDATE CATEGORY
  const onFinish = async (values) => {
    try {
      if (editingId) {
        await API.put(`/categories/${editingId}`, values);

        message.success("Category Updated");
      } else {
        await API.post("/categories", values);

        message.success("Category Added");
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
    });

    setOpen(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/categories/${id}`);

      message.success("Category Deleted");

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
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Actions",
      key: "actions",

      render: (_, record) => (
        <div className="flex gap-3">
          {/* EDIT BUTTON */}
          <button
            onClick={() => handleEdit(record)}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            <EditOutlined />
            Edit
          </button>

          {/* DELETE BUTTON */}
          <Popconfirm
            title="Delete Category?"
            description="Are you sure to delete this category?"
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
        
        {/* TOP HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Categories
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Manage all categories
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
            Add Category
          </button>
        </div>

        {/* TABLE */}
        <Table
          columns={columns}
          dataSource={categories}
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
            {editingId ? "Edit Category" : "Add Category"}
          </h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            {/* CATEGORY INPUT */}
            <Form.Item
              label="Category Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter category name",
                },
              ]}
            >
              <Input
                placeholder="Enter category name"
                className="h-11 rounded-lg"
              />
            </Form.Item>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-xl transition"
            >
              {editingId ? "Update Category" : "Save Category"}
            </button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Categories;