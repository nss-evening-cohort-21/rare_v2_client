import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleComment } from '../../../utils/data/commentData';
import CommentForm from '../../../components/comment/CommentForm';

export default function EditComment() {
  const [editComment, setEditComment] = useState({});
  const router = useRouter();
  const { commentId } = router.query;
  const [postId, setPostId] = useState();

  useEffect(() => {
    getSingleComment(commentId.id).then(setEditComment);
    console.warn(editComment);
    getSingleComment(commentId.id).then((data) => setPostId(data.post_id));
  }, [commentId]);

  return (
    <CommentForm obj={editComment} commentPostId={postId} />
  );
}
