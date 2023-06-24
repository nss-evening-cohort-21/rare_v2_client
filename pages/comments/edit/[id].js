import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleComment } from '../../../utils/data/commentData';
import CommentForm from '../../../components/comment/CommentForm';

export default function EditComment() {
  const [editComment, setEditComment] = useState({});
  const router = useRouter();
  const { id } = router.query;
  console.warn(id);
  useEffect(() => {
    getSingleComment(id).then(setEditComment);
    console.warn(id);
  }, [id]);

  return (
    <CommentForm obj={editComment} />
  );
}
