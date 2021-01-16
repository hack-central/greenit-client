import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Row, Col, Avatar, Image, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Link } = Typography;
const { Header } = Layout;

export default function Navbar() {
  const [UserImg, setUserImg] = useState(false);
  const [UserImgUrl, setUserImgUrl] = useState('');

  // Add useEffect for UserImgUrl

  return (
    // TODO: Remove style tag
    <Header style={{ backgroundColor: 'transparent' }}>
      <Row>
        <Col span={8}>
          {/* TODO: Replace with image icon instead of text */}
          <Title level={3}>Greenit</Title>
        </Col>
        <Col className="align-right" span={8}>
          <Space size={30}>
            <Link>My Connections</Link>
            <Link href="https://ant.design">Events</Link>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              size="large"
              src={UserImg && <Image src={UserImgUrl} />}
              icon={!UserImg && <UserOutlined />}
            />
          </Space>
        </Col>
      </Row>
    </Header>
  );
}
