import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PostCard from '../../components/post/PostCard';
import { getPosts } from '../../utils/data/postData';

function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const getAllPosts = () => {
    getPosts().then((data) => setPosts(data));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          router.push('/posts/new');
        }}
      >
        Create New Post
      </Button>
      <article className="posts">
        <h3>Posts</h3>
        {posts.map((post) => (
          <section key={`post--${post.id}`} className="posts">
            <PostCard postObj={post} />
          </section>
        ))};
      </article>
    </>
  );
}

export default Home;
