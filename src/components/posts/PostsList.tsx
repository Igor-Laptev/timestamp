'use client'; 

import styles from './PostsList.module.css';
import PostItem from './PostItem';
import { fetchPosts } from '../../services/api';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h2 className={styles.postsTitle}>Posts</h2>
      <ul className={styles.postsList}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
