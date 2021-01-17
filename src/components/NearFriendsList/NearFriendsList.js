import { List, Typography, Empty, Card } from 'antd';
import { useEffect, useState } from 'react';
import SuggestedUser from '../SuggestedUser/SuggestedUser';

const { Title } = Typography;

export default function NearFriendsList() {
  const [users, setResponse] = useState([]);

  useEffect(() => {
    const fetchReq = async () => {
      const usersRes = await fetch('https://earthy.sauravmh.com/api/users');
      const usersData = await usersRes.json();
      setResponse(usersData);
    };

    fetchReq();
  }, []);

  const GenerateUsers = () => {
    if (users.length <= 0) {
      return <Empty />;
    }

    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={users.slice(5, 10)}
        renderItem={(user) => (
          <SuggestedUser
            avatarurl={`${user.avatar}?q=${Math.random()}`}
            username={user.firstName}
            key={user.id}
          />
        )}
      />
    );
  };

  return (
    <Card style={{ marginTop: 16 }}>
      <Title level={4}>People you may know</Title>
      <GenerateUsers />
    </Card>
  );
}
