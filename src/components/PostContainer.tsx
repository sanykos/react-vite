import { useState } from 'react';

import { postApi } from '../services/PostService';

function PostContainer() {
  const [limit] = useState(10);
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = postApi.useFetchAllPostsQuery(limit, {
    pollingInterval: 1000,
  });

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLimit(3);
  //     }, 2000);
  //   }, []);

  return (
    <div>
      <button type="button" onClick={() => refetch()}>
        refetch
      </button>
      {isLoading && <h1>Идет загрузка</h1>}
      {isError && <h1>Произошла ошибка</h1>}
      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div>{post.body}</div>
          <button type="button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostContainer;
