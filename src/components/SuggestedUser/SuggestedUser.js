import { Row, Card, Typography, Avatar } from 'antd';
import { PlusCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Meta } = Card;
const { Link } = Typography;

export default function SuggestedUser({ username, avatarurl }) {
  const [Checked, setChecked] = useState(false);

  return (
    <Row style={{ padding: '12px 0' }}>
      <Meta
        className="align-middle"
        avatar={<Avatar size="large" src={avatarurl} />}
        title={
          <Link href="#" target="_blank">
            {username}
          </Link>
        }
      />
      <div
        style={{ cursor: 'pointer' }}
        className="align-right align-middle"
        onClick={() => {
          setChecked(true);
        }}
      >
        {Checked ? (
          <CheckCircleOutlined style={{ fontSize: '20px', color: '#87d068' }} />
        ) : (
          <PlusCircleOutlined style={{ fontSize: '20px' }} />
        )}
      </div>
    </Row>
  );
}

SuggestedUser.defaultProps = {
  username: 'Username',
  avatarurl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};
