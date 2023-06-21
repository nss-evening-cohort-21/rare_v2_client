import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CommentCard from '../../../components/comment/CommentCard';
import { getCommentsByPost } from '../../../utils/data/postData';

export default function ViewComments() {
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getCommentsByPost(id).then(setComments);
  }, [id]);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <section
          key={`comment--${comment.id}`}
          className="comment"
        >
          <CommentCard commentObj={comment} />
        </section>
      ))}
    </div>
  );
}
