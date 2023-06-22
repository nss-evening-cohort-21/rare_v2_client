import React from 'react';
import CommentForm from '../../components/comment/CommentForm';
import { useAuth } from '../../utils/context/authContext';

const NewComment = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Add a Comment</h2>
      <CommentForm user={user} />
    </div>
  );
};

export default NewComment;
