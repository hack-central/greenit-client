import { Layout, List, Col, Typography } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import Post from '../components/Post/Post';
import Sidebar from '../components/Sidebar/Sidebar';
import CreatePost from '../components/CreatePost/CreatePost';
import { useEffect, useState } from 'react';

const { Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://earthy.sauravmh.com/api/posts');
      const data = await res.json();
      setData(data);
    })();
  }, []);

  const GeneratePosts = () => {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 5 }}
        dataSource={data}
        renderItem={(item) => <Post data={item} />}
      />
    );
  };

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
            <GeneratePosts />
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
