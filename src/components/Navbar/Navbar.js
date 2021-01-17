import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Row, Col, Avatar, Image, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';

const { Header } = Layout;

export default function Navbar() {
  const [UserImg, setUserImg] = useState(false);
  const [UserImgUrl, setUserImgUrl] = useState('');

  useEffect(() => {
    let loggedUser = localStorage.getItem('earthyUser');

    if (!loggedUser) {
      <Redirect to="/" />;
    }

    loggedUser = JSON.parse(loggedUser);
    if (loggedUser.avatar) {
      setUserImgUrl(loggedUser.avatar);
      setUserImg(true);
    }
  }, []);
  // Add useEffect for UserImgUrl

  return (
    <Header style={{ backgroundColor: 'transparent', marginTop: '5px' }}>
      <Row>
        <Col span={8}>
          <Link to="/home">
            <img alt="logo" src={logo} style={{ maxHeight: '64px' }} />
          </Link>
        </Col>
        <Col className="align-right" span={8}>
          <Space size={30}>
            <Link to="/profile">My Connections</Link>
            <Link to="/events">Events</Link>
            <Link to="/profile">
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                size="large"
                src={UserImg && <Image src={UserImgUrl} preview={false} />}
                icon={!UserImg && <UserOutlined />}
              />
            </Link>
          </Space>
        </Col>
      </Row>
    </Header>
  );
}
