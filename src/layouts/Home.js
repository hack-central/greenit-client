import { Layout, List, Col, Typography, Empty } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import Post from '../components/Post/Post';
import Sidebar from '../components/Sidebar/Sidebar';
import CreatePost from '../components/CreatePost/CreatePost';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PageFooter from '../components/PageFooter/PageFooter';

const { Sider, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(true);
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

  useEffect(() => {
    let loggedUser = localStorage.getItem('earthyUser');
    if (loggedUser) {
      loggedUser = JSON.parse(loggedUser);
      setUser(loggedUser);
    } else {
      setLoggedIn(false);
    }
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

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider width="360" className="feed-sidebar">
          <ProfileCard
            trophies={user.trophies}
            avatarurl={user.avatar}
            username={user.firstName}
            key={user.id}
          />
        </Sider>
        <Content>
          <Col>
            <CreatePost avatarurl={user.avatar} username={user.firstName} />
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
      <PageFooter />
    </Layout>
  );
}
