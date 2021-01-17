import { Layout, List, Col, Typography, Empty } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import Post from '../components/Post/Post';
import Sidebar from '../components/Sidebar/Sidebar';
import CreatePost from '../components/CreatePost/CreatePost';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { useEffect, useState } from 'react';

const { Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const [res, setResponse] = useState({});

  useEffect(() => {
    const fetchReq = async () => {
      const postsRes = await fetch('https://earthy.sauravmh.com/api/posts');
      const usersRes = await fetch('https://earthy.sauravmh.com/api/users');
      const postsData = await postsRes.json();
      const usersData = await usersRes.json();
      setResponse({ posts: postsData, users: usersData });
    };

    fetchReq();
  }, []);

  const GeneratePosts = () => {
    if (res === {}) {
      return <Empty />;
    }

    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 5 }}
        dataSource={res.posts}
        renderItem={(post) => <Post users={res?.users} post={post} />}
      />
    );
  };

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider width="360" className="feed-sidebar">
          <ProfileCard />
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
