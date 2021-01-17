import { Card, Row, Col, Statistic, Typography } from 'antd';
import {
  HeartOutlined,
  RiseOutlined,
  UsergroupAddOutlined,
  FireOutlined,
} from '@ant-design/icons';

export default function Statistics() {
  return (
    <Card bordered={false} style={{ width: '90%', margin: '20px auto' }}>
      <Row justify="center" gutter={16}>
        <Col span={8}>
          <Statistic
            suffix={
              <Typography.Text type="secondary" style={{ fontSize: '0.5em' }}>
                Events attended
              </Typography.Text>
            }
            prefix={<HeartOutlined style={{ fontSize: '0.8em' }} />}
            value={43}
            valueStyle={{ textAlign: 'center' }}
          />
        </Col>
        <Col span={6} offset={2}>
          <Statistic
            suffix={
              <Typography.Text type="secondary" style={{ fontSize: '0.5em' }}>
                Events Hosted
              </Typography.Text>
            }
            prefix={<FireOutlined style={{ fontSize: '0.8em' }} />}
            value={3}
            valueStyle={{ textAlign: 'center' }}
          />
        </Col>
      </Row>
      <br />
      <Row justify="center" gutter={16}>
        <Col span={8}>
          <Statistic
            suffix={
              <Typography.Text type="secondary" style={{ fontSize: '0.5em' }}>
                Impact Points
              </Typography.Text>
            }
            prefix={<UsergroupAddOutlined style={{ fontSize: '0.8em' }} />}
            value={114}
            valueStyle={{ textAlign: 'center' }}
          />
        </Col>
        <Col span={6} offset={2}>
          <Statistic
            suffix={
              <Typography.Text type="secondary" style={{ fontSize: '0.5em' }}>
                Impact Rank
              </Typography.Text>
            }
            prefix={<RiseOutlined style={{ fontSize: '0.8em' }} />}
            value={7}
            valueStyle={{ textAlign: 'center' }}
          />
        </Col>
      </Row>
    </Card>
  );
}
