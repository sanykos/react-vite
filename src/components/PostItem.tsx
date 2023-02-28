import React, { FC } from 'react';

import { IPost } from '../models/Post';

interface PostItemProps {
  post: IPost;
  updatePost: (post: IPost) => void;
  deletePost: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, updatePost, deletePost }) => {
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    deletePost(post);
  };

  const handleUpdate = () => {
    updatePost(post);
  };

  return (
    <div onClick={handleUpdate}>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default PostItem;
