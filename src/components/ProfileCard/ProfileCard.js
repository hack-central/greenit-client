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

const trophyMap = {
  'Mr. Green': 'mrGreen',
  'Earth Saviour': 'earthSaviour',
  'Novice Planter': 'earthCleaner',
  'Green thumb Jr.': 'greenThumbJr',
  'Green Thumb Sr.': 'greenThumbSr',
  'Earth Cleaner': 'earthCleaner',
  'Earth Cleaner Veteran': 'earthCleanerVeteran',
  'Environmentalist lvl 1': 'environmentalistLvl1',
  'Environmentalist lvl 2': 'environmentalistLvl2',
  'Environmentalist lvl 3': 'environmentalistLvl3',
  'Recycling Enthusiast': 'recyclingEnthusiast',
  'Green Influencer Novice': 'greenInfluencerNovice',
  'Green Influencer Veteran': 'greenInfluencerVeteran',
};

export default function ProfileCard({ username, avatarurl, trophies }) {
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
            <BadgesLogos trophies={trophies} />
          </Space>
        </Row>
      </Card>
    </Col>
  );
}

const BadgesLogos = ({ trophies }) => {
  if (!trophies) {
    return null;
  }
  return trophies.map((name) => {
    const imgName = trophyMap[name];
    return (
      <Avatar
        src={<Image preview={false} src={`/badges/${imgName}.png`} />}
        shape="square"
        size={48}
      />
    );
  });
};

ProfileCard.defaultProps = {
  username: 'Username',
  avatarurl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};
