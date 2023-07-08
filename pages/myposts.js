import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PostCard from '../components/post/PostCard';
import { useAuth } from '../utils/context/authContext';
import { getPostsByUserId } from '../utils/data/postData';

function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const getAllUserPosts = () => {
    getPostsByUserId(user.id).then((data) => setPosts(data));
  };

  useEffect(() => {
    getAllUserPosts();
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
        <h3>My Posts</h3>
        {posts.map((post) => (
          <section key={`post--${post.id}`} className="posts">
            <PostCard postObj={post} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
