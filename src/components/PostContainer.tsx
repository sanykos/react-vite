import React, { useState } from 'react';

import { IPost } from '../models/Post';

import { postApi } from '../services/PostService';

import PostItem from './PostItem';

function PostContainer() {
  const [limit] = useState(100);
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = postApi.useFetchAllPostsQuery(limit /** {pollingInterval: 1000} */);

  const [createPost] = postApi.useCreatePostMutation();
  const [updatePost] = postApi.useUpdatePostMutation();
  const [deletePost] = postApi.useDeletePostMutation();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLimit(3);
  //     }, 2000);
  //   }, []);

  const handleCreatePost = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemovePost = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdatePost = (post: IPost) => {
    const title = prompt() || '';
    updatePost({ ...post, title });
  };

  return (
    <div>
      <button type="button" onClick={() => refetch()}>
        refetch
      </button>
      <button type="button" onClick={handleCreatePost}>
        Add new post
      </button>
      {isLoading && <h1>Идет загрузка</h1>}
      {isError && <h1>Произошла ошибка</h1>}
      {posts?.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          updatePost={handleUpdatePost}
          deletePost={handleRemovePost}
        />
      ))}
    </div>
  );
}

export default PostContainer;
