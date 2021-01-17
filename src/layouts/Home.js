import { Layout, Row, Col, Typography } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import Post from '../components/Post/Post';
import Sidebar from '../components/Sidebar/Sidebar';
import CreatePost from '../components/CreatePost/CreatePost';

const { Footer, Sider, Content } = Layout;
const { Title, Link } = Typography;

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider width="360" className="feed-sidebar">
          Sider
        </Sider>
        <Content>
          <Col>
            <CreatePost />
            <Title className="home-feed-header">
              Some highlights from the community!
            </Title>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Col>
        </Content>
        <Sider width="360" theme="light" className="feed-sidebar">
          <Sidebar />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
