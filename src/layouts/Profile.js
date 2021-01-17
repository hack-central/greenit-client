import { useEffect, useState } from 'react';
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
import { UserOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Badges from '../components/Badges/Badges';
import NearFriendsList from '../components/NearFriendsList/NearFriendsList';
import Statistics from '../components/Statistics/Statistics';

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

const { Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function Profile() {
  const [data, setData] = useState({});

  useEffect(() => {
    let loggedUser = localStorage.getItem('earthyUser');

    if (!loggedUser) {
      <Redirect to="/" />;
    }

    loggedUser = JSON.parse(loggedUser);

    (async () => {
      const res = await fetch(
        `https://earthy.sauravmh.com/api/users/${loggedUser.id}`
      );
      const data = await res.json();
      setData(data);
    })();
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider width="400" theme="light" style={{ background: '#ffffff00' }} />
        <Content>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <Card
                cover={<Image src="https://picsum.photos/seed/11/1500/500" />}
                className="header-card-profile"
                bordered={false}
              >
                <Card className="top-float-profile" bordered={false}>
                  <Statistic
                    value={1128}
                    prefix={
                      <Image
                        preview={false}
                        src="https://i.pinimg.com/originals/28/7e/59/287e594ee5eb7f0df4439ee606a17efe.png"
                        width={35}
                      />
                    }
                    valueStyle={{ color: 'black', fontWeight: 'bold' }}
                  />
                  <Avatar size={150} icon={<UserOutlined />} />
                </Card>
                <Row justify="center">
                  <Col sm={16}>
                    <Title level={2} style={{ textAlign: 'center' }}>
                      {data.firstName} {data.lastName}
                    </Title>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col sm={10}>
                    <Row align="middle">
                      <Space>
                        <Title level={4}>username:</Title>
                        <Title level={5} copyable style={{ color: '#87d068' }}>
                          {data.email?.split('@')[0]}
                        </Title>
                      </Space>
                    </Row>
                  </Col>
                  <Col
                    sm={10}
                    style={{ textAlign: 'right', paddingRight: '1em' }}
                  >
                    <Space size="large">
                      <BadgesLogos trophies={data?.trophies} />
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col sm={12}>
              <Statistics />
              <NearFriendsList />
            </Col>
            <Col sm={12}>
              <Badges data={data} />
            </Col>
          </Row>
        </Content>
        <Sider width="400" theme="light" style={{ background: '#ffffff00' }} />
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

const BadgesLogos = ({ trophies }) => {
  if (!trophies) {
    return null;
  }
  return trophies.map((name) => {
    console.log(name);
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
