import { Layout, Row, Col, Typography } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import Post from '../components/Post/Post';

const { Footer, Sider, Content } = Layout;
const { Title, Link } = Typography;

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Col>
            <Title className="home-feed-header">Greenit</Title>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Col>
        </Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
