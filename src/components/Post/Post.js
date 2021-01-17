import { useState } from 'react';
import { Card, Avatar, Divider, Image } from 'antd';
import {
  HeartTwoTone,
  HeartFilled,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default function Post({ data }) {
  const PostUsername = `Anonymous user-${data?.userId}`;
  const PostContent = data.content;
  const photoUrl = data.photo;
  const [CommentVisible, setCommentVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card
      style={{ width: '90%', margin: '20px auto' }}
      bordered={false}
      cover={<Image className="post-img" alt="Post" src={photoUrl} />}
      actions={[
        !liked ? (
          <HeartTwoTone
            key="like"
            twoToneColor="#eb2f96"
            onClick={() => setLiked(true)}
          />
        ) : (
          <HeartFilled
            key="like"
            style={{ color: '#FF1493' }}
            onClick={() => setLiked(false)}
          />
        ),
        <CommentOutlined
          key="comment"
          onClick={() => setCommentVisible(!CommentVisible)}
        />,
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
      {CommentVisible && (
        <>
          <Divider />
          <p>lol comment</p>
        </>
      )}
    </Card>
  );
}
