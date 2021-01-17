import { useState } from 'react';
import {
  Card,
  Divider,
  Row,
  Col,
  Modal,
  Typography,
  Avatar,
  Steps,
  Empty,
} from 'antd';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Text } = Typography;
const { Step } = Steps;

export default function Event({
  eventName,
  eventImage,
  eventLocation,
  eventDate,
  eventOrganizer,
  eventOrganizerImage,
  eventDescription,
}) {
  const [visible, setVisible] = useState(false);

  if (!eventName) {
    return <Empty />;
  }

  return (
    <>
      <Card
        hoverable
        className="eventCard"
        onClick={() => setVisible(true)}
        style={{ width: '90%' }}
      >
        <Row justify="end">
          <Col span={12}>
            <img alt="example" src={eventImage} />
          </Col>
          <Col span={12}>
            <Meta
              title={`${eventName}`}
              description={`${eventLocation}, ${eventDate}`}
            />
            <br />
            <Row style={{ marginTop: '5px' }}>
              <Avatar size="large" src={eventOrganizerImage} />
              <p style={{ paddingLeft: '10px', margin: 'auto 0' }}>
                {eventOrganizer}
              </p>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* Event Modal Content */}
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Row>
          <Col span={12}>
            <img alt="example" src={eventImage} />
          </Col>
          <Col span={12}>
            <Text className="modalTitle">{eventName}</Text>
            <br />
            <Text type="secondary" className="modalSubTitle">
              <EnvironmentOutlined style={{ marginRight: '10px' }} />
              {eventLocation}
              <br />
              <CalendarOutlined style={{ marginRight: '10px' }} />
              {eventDate}
            </Text>

            <Row style={{ marginTop: '5px' }}>
              <Avatar size="large" src={eventOrganizerImage} />
              <p style={{ paddingLeft: '10px', margin: 'auto 0' }}>
                {eventOrganizer}
              </p>
            </Row>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Text>{eventDescription}</Text>
        </Row>
        <Row justify="center">
          <Col span={8}>
            <Steps
              direction="vertical"
              size="small"
              current={1}
              style={{ width: '100%', marginTop: 32 }}
            >
              <Step title="Event Confirmed" />
              <Step
                title="Awaiting Registrations"
                description="Open till 20-01-2021"
              />
              <Step title="Event Complete" />
            </Steps>
          </Col>
          <Col span={8}>
            <Card style={{ marginTop: 32 }}>
              <Title level={4}>See on Maps</Title>
            </Card>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

Event.defaultProps = {
  eventName: 'Event Name',
  eventOrganizer: 'Username',
  eventDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`,
  eventOrganizerImage:
    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  eventImage:
    'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  eventLocation: 'location',
  eventDate: '01-01-2021',
};
