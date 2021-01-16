import { Card, List, Avatar, Progress, Typography } from 'antd';

export default function Badges() {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <Card
      title="Badges Progress"
      bordered={false}
      style={{ width: '90%', margin: '20px auto' }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  size="large"
                  src="https://image.shutterstock.com/image-vector/golden-cup-pixel-art-retro-260nw-1527041273.jpg"
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <>
                  <Typography.Text type="secondary">
                    Mr. Green Level 7 achieved
                  </Typography.Text>
                  <Progress
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    strokeWidth={20}
                    percent={70}
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
