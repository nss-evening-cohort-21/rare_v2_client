import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostForm from '../../../components/post/PostForm';
import { getSinglePost } from '../../../utils/data/postData';

const EditPost = () => {
  const [editPost, setEditPost] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePost(id).then(setEditPost);
  }, [id]);

  return (
    <div>
      <h2>Edit Post</h2>
      <PostForm postObj={editPost} />
    </div>
  );
};

export default EditPost;
