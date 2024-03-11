import { PostListContainer } from '../../components/posts/custom-container';
import { getAllPostsFromNotion } from '../../lib/posts';

const Blog = async () => {
  const posts = await getAllPostsFromNotion();

  return <PostListContainer posts={posts} />;
};

export default Blog;
