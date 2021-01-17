import { useState } from 'react';
import {
  Layout,
  Row,
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

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function Login() {
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

  // Handle Login
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  // Modal Logic
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: 'transparent' }}>
        <Row>asfa</Row>
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

                  <a className="login-form-forgot" href="">
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
                  Or <a onClick={showModal}>register now!</a>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        © Greenit 2021{' '}
        <a href="https://github.com/hack-central/greenit-client">&lt;/&gt;</a>
      </Footer>
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
