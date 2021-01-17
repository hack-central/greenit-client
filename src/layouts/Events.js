import { useState } from 'react';
import {
  Layout,
  Card,
  Divider,
  Row,
  Col,
  Modal,
  Typography,
  Avatar,
  Input,
  AutoComplete,
} from 'antd';
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar/Navbar';
import Event from '../components/Event/Event';
import PageFooter from '../components/PageFooter/PageFooter';

const { Meta } = Card;
const { Text } = Typography;
const { Sider, Content } = Layout;

export default function Events() {
  return (
    <Layout>
      <Navbar />

      <Layout style={{ maxHeight: '80vh', overflow: 'scroll' }}>
        <Content>
          <Col className="event-col">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </Col>
        </Content>
        <Sider className="event-sidebar" width={500}>
          Sider
        </Sider>
      </Layout>
      <PageFooter />
    </Layout>
  );
}
