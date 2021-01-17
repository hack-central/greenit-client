import {
  Row,
  Col,
  Typography,
  Avatar,
  Statistic,
  Card,
  Image,
  Space,
} from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function ProfileCard({ username, avatarurl }) {
  return (
    <Col>
      <Card
        style={{ width: 300, marginTop: 22, margin: '0 auto' }}
        cover={<Image src="https://picsum.photos/seed/11/1500/500" />}
        className="header-card-profile"
        bordered={false}
      >
        <Card className="top-float-profile" bordered={false}>
          <Avatar size={120} style={{ marginTop: 50 }} src={avatarurl} />
        </Card>
        <Row justify="center">
          <Col sm={16}>
            <Title level={2} style={{ textAlign: 'center' }}>
              <Link to="/profile">{username}</Link>
            </Title>
            <Statistic
              suffix="Green Points"
              value={1128}
              valueStyle={{ color: 'black', textAlign: 'center' }}
            />
          </Col>
        </Row>
        <Row>
          Recent Badges
          <Space>
            <Avatar
              src={
                <Image
                  preview={false}
                  src="https://image.shutterstock.com/image-vector/golden-cup-pixel-art-retro-260nw-1527041273.jpg"
                />
              }
              shape="square"
              size={48}
            />
            <Avatar
              src={
                <Image
                  preview={false}
                  src="https://www.pngkit.com/png/detail/19-199923_ivy-clipart-medal-medali-png.png"
                />
              }
              shape="square"
              size={48}
            />
            <Avatar
              src={
                <Image
                  preview={false}
                  src="https://i.pinimg.com/originals/28/7e/59/287e594ee5eb7f0df4439ee606a17efe.png"
                />
              }
              shape="square"
              size={48}
            />
          </Space>
        </Row>
      </Card>
    </Col>
  );
}

ProfileCard.defaultProps = {
  username: 'Username',
  avatarurl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};
