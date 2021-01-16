import { useState } from 'react';
import {
  Card,
  Divider,
  Row,
  Col,
  Modal,
  Typography,
  Avatar,
  Image,
} from 'antd';
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Meta } = Card;
const { Text } = Typography;

export default function Events() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Card
        style={{ width: 1000 }}
        hoverable
        className="eventCard"
        onClick={() => setVisible(true)}
      >
        <Row>
          <Col span={8}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </Col>
          <Col span={16}>
            <Meta title="Event Name" description="Location" />
          </Col>
        </Row>
      </Card>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Row>
          <Col span={7}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </Col>
          <Col span={17}>
            <Text className="modalTitle">Event Name</Text>
            <br></br>
            <Avatar
              className="userImg"
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
            <Text type="success" className="user">
              UserName
            </Text>
            <br></br>
            <Text type="secondary" className="modalSubTitle">
              <EnvironmentOutlined />
              Location<br></br>
              <ClockCircleOutlined />
              Time
            </Text>
          </Col>
        </Row>
        <Divider dashed />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Modal>
    </>
  );
}
