import { Row, Col, Card, Avatar, Image, Typography, Space } from 'antd';
import SuggestedUser from '../SuggestedUser/SuggestedUser';

const { Meta } = Card;
const { Title, Link } = Typography;

export default function Sidebar() {
  return (
    <Col>
      <Card
        hoverable
        style={{ width: 300, marginTop: 16 }}
        cover={
          <img
            alt="example"
            src="http://www.chiangmaicitylife.com/wp-content/uploads/2017/10/DSC_4229-1352x900.jpg"
          />
        }
      >
        <Meta
          title={
            <Link href="https://ant.design" target="_blank">
              Bee Farm Tours
            </Link>
          }
          description="Sponsored"
        />
      </Card>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Title level={4}>People you may know</Title>
        <SuggestedUser username="Test Name" />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
      </Card>
    </Col>
  );
}
