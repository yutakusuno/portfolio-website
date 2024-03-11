import PostList from '../../components/posts/post-list';
import { getPostsFromNotion } from '../../lib/posts';

const Blog = async () => {
  const posts = await getPostsFromNotion();

  return <PostList posts={posts} />;
};

export default Blog;
