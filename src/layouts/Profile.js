import './layout.css';
import {
  Layout,
  Row,
  Col,
  Typography,
  Avatar,
  Statistic,
  Card,
  Image,
  Space,
} from 'antd';
import { UserOutlined, LikeFilled } from '@ant-design/icons';
import Navbar from '../components/Navbar/Navbar';
import Badges from '../components/Badges/Badges';
import Statistics from '../components/Statistics/Statistics';

const { Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function Profile() {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider width="300" theme="light" style={{ background: '#ffffff00' }} />
        <Content>
          <Row align="middle" justify="center">
            <Col sm={20}>
              <Card
                cover={<Image src="https://picsum.photos/seed/11/1500/500" />}
                className="header-card-profile"
                bordered={false}
              >
                <Card className="top-float-profile" bordered={false}>
                  <Statistic
                    title="Total Likes"
                    value={1128}
                    prefix={<LikeFilled />}
                    valueStyle={{ color: 'black', fontWeight: 'bold' }}
                  />
                  <Avatar size={{ xxl: 150 }} icon={<UserOutlined />} />
                </Card>
                <Row justify="center">
                  <Col sm={10}>
                    <Row align="bottom">
                      <Space align="center">
                        <Avatar
                          src={
                            <Image src="https://i.pinimg.com/originals/28/7e/59/287e594ee5eb7f0df4439ee606a17efe.png" />
                          }
                          shape="square"
                          size={48}
                        />
                        <Title level={3}>points:</Title>
                        <Title level={5} copyable style={{ color: 'green' }}>
                          1220
                        </Title>
                      </Space>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Title level={2} style={{ textAlign: 'center' }}>
                      John Doe
                    </Title>
                  </Col>
                  <Col
                    sm={10}
                    style={{ textAlign: 'right', paddingRight: '1em' }}
                  >
                    <Space>
                      <Avatar
                        src={
                          <Image src="https://image.shutterstock.com/image-vector/golden-cup-pixel-art-retro-260nw-1527041273.jpg" />
                        }
                        shape="square"
                        size={48}
                      />
                      <Avatar
                        src={
                          <Image src="https://www.pngkit.com/png/detail/19-199923_ivy-clipart-medal-medali-png.png" />
                        }
                        shape="square"
                        size={48}
                      />
                      <Avatar
                        src={
                          <Image src="https://i.pinimg.com/originals/28/7e/59/287e594ee5eb7f0df4439ee606a17efe.png" />
                        }
                        shape="square"
                        size={48}
                      />
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Statistics />
            </Col>
            <Col sm={12}>
              <Badges />
            </Col>
          </Row>
        </Content>
        <Sider width="300" theme="light" style={{ background: '#ffffff00' }} />
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
