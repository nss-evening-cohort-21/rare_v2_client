import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CommentForm from '../../../../components/comment/CommentForm';
import { useAuth } from '../../../../utils/context/authContext';
import { getSinglePost } from '../../../../utils/data/postData';

const NewComment = () => {
  const [post, setPost] = useState({});
  const { user } = useAuth();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSinglePost(id).then(setPost);
  }, [id]);

  return (
    <div>
      <h2>Add a Comment</h2>
      <CommentForm user={user} postObj={post} />
    </div>
  );
};

export default NewComment;
