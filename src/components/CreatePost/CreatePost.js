import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Input, Typography, Modal, Button, Card } from 'antd';
import {
  FormOutlined,
  PlaySquareOutlined,
  CalendarOutlined,
  CameraOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;

export default function CreatePost({ avatarurl, username }) {
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
    <>
      <div className="home-create-post">
        <Card
          style={{ width: '100%' }}
          actions={[
            <Link>
              <CameraOutlined key="image" /> Photo
            </Link>,
            <Link>
              <PlaySquareOutlined key="video" /> Video
            </Link>,
            <Link to="/events">
              <CalendarOutlined key="event" /> Create Event
            </Link>,
          ]}
        >
          <Button
            type="link"
            shape="round"
            icon={<FormOutlined />}
            size="large"
            onClick={showModal}
          >
            Start a post
          </Button>
        </Card>
      </div>

      <Modal
        title="Write a post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          // Add post logic here
          <Button key="submit" type="primary" onClick={handleOk}>
            Post
          </Button>,
        ]}
      >
        <Row style={{ marginBottom: '20px' }}>
          <Avatar size="large" src={avatarurl} />
          <Link style={{ paddingLeft: '10px', margin: 'auto 0' }} to="/profile">
            {username}
          </Link>
        </Row>
        <TextArea
          style={{ border: 'none' }}
          rows={4}
          placeholder="What have you been up to?"
        />
      </Modal>
    </>
  );
}

CreatePost.defaultProps = {
  username: 'Username',
  avatarurl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};
