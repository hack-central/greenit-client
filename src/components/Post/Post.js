import { useState } from 'react';
import { Card, Avatar, Image, Comment, List, Empty } from 'antd';
import {
  HeartTwoTone,
  HeartFilled,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import ta from 'time-ago';

const { Meta } = Card;

export default function Post({ post, users }) {
  const PostUsername = users[post?.userId].firstName;
  const PostContent = post?.content;
  const photoUrl = post?.photo;
  const [CommentVisible, setCommentVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  if (post === {} || users.length <= 0) {
    return <Empty />;
  }

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
        <List
          className="comments"
          header={`${post.comments.length} replies`}
          itemLayout="horizontal"
          dataSource={post.comments}
          renderItem={(item) => (
            <li>
              <Comment
                actions={item.actions}
                author={users[item.userId].firstName}
                avatar={users[item.userId].avatar}
                content={item.content}
                datetime={ta.ago(item.createdAt)}
              />
            </li>
          )}
        />
      )}
    </Card>
  );
}
