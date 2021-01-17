import { Col, Card, Typography } from 'antd';
import NearFriendsList from '../NearFriendsList/NearFriendsList';

const { Meta } = Card;
const { Link } = Typography;

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
      <NearFriendsList />
    </Col>
  );
}
