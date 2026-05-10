import { useState } from 'react'
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  message,
} from 'antd'

import { LockOutlined, MailOutlined } from '@ant-design/icons'

import { useNavigate } from 'react-router-dom'

import API from '../api/axios'

const { Title } = Typography

const Login = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const onFinish = async values => {
    try {
      setLoading(true)

      const { data } = await API.post('/auth/login', values)

      localStorage.setItem('token', data.token)

      message.success('Login Successful')

      navigate('/')
    } catch (err) {
      message.error(err.response?.data?.message || 'Login Failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f2f5',
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 16,
        }}
      >
        <Title level={2} style={{ textAlign: 'center' }}>
          Admin Login
        </Title>

        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Enter Email' }]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Enter Password' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;