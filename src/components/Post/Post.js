import { useState } from 'react';
import { Card, Avatar, Button, Divider, Image } from 'antd';
import {
  HeartOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default function Post() {
  const [PostUsername, setUsername] = useState('Username');
  const [PostContent, setPostContent] = useState('Post Content');
  const [CommentVisible, setCommentVisible] = useState(false);

  return (
    <Card
      style={{ width: '90%', margin: '20px auto' }}
      bordered={false}
      cover={
        <Image
                className="post-img"
          alt="Post"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <HeartOutlined key="like"/>,
        <CommentOutlined key="comment" onClick={() => setCommentVisible(!CommentVisible)}/>,
        <ShareAltOutlined key="share" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={PostUsername}
        description={PostContent}
      />
      { CommentVisible && (
        <>
        <Divider />
        <p>lol comment</p>
        </>
      )}
    </Card>
  );
}
