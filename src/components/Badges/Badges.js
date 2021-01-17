import { Card, List, Avatar, Progress, Typography } from 'antd';

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

export default function Badges({ data }) {
  return (
    <Card title="Badges Progress">
      <List
        itemLayout="horizontal"
        dataSource={data.trophies}
        pagination={{ pageSize: 4 }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar size="large" src={`/badges/${trophyMap[item]}.png`} />
              }
              title={item}
              description={
                <>
                  <Typography.Text type="secondary">{item}</Typography.Text>
                  <Progress
                    strokeColor={{
                      '0%': '#22c1c3',
                      '100%': '#fdbb2d',
                    }}
                    strokeWidth={20}
                    percent={Math.random().toPrecision(1) * 100}
                    status="active"
                  />
                </>
              }
            />
          </List.Item>
        )}
      />
      ,
    </Card>
  );
}
