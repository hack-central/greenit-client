import { Card } from 'antd';

export default function Post() {
  return (
    <Card
      title="Card title"
      bordered={false}
      style={{ width: '80%', margin: '20px auto' }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}
