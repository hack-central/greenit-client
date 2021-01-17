import { Card, List, Avatar, Progress, Typography } from 'antd';

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
                <Avatar
                  size="large"
                  src="https://image.shutterstock.com/image-vector/golden-cup-pixel-art-retro-260nw-1527041273.jpg"
                />
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
                    percent={Math.random().toPrecision(1)*100}
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
