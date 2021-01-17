import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Layout,
  Card,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Space,
  Typography,
  Modal,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PageFooter from '../components/PageFooter/PageFooter';
import logo from '../assets/logo.png';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function Login() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    let loggedInUser = localStorage.getItem('earthyUser');
    if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      loggedInUser.id && setLoggedIn(true);
    }
  }, []);

  // Handle Login
  const onFinish = ({ username, password }) => {
    loginHandler({ username, password });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const loginHandler = async (details) => {
    const res = await fetch('https://earthy.sauravmh.com/api/users');
    const data = await res.json();
    const { username, password } = details;

    console.log(details);
    const user = data.find(
      (e) => e.email === username && e.password === password
    );
    if (user) {
      localStorage.setItem('earthyUser', JSON.stringify(user));
      setUser(user);
    }
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  if (user.id || isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <Layout>
      <Header style={{ backgroundColor: 'transparent' }}>
        <img alt="logo" src={logo} style={{ maxHeight: '64px' }} />
      </Header>
      <Layout>
        <Sider className="login-sidebar" width="50%"></Sider>
        <Content className="login-column">
          <Col>
            <Card hoverable style={{ width: 500 }}>
              <Title style={{ textAlign: 'center' }}>Welcome to Greenit!</Title>
              <br />
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your Username!' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your Password!' },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="/">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  Or <a onClick={showModal}>register now!</a>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Content>
      </Layout>
      <PageFooter />
      <Modal
        title="Create a Greenit Account"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          // onFinish={}
          // onFinishFailed={}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please select a username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter a valid mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter a password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Create Account
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}
