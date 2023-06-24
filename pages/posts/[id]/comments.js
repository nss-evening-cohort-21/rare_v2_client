import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import CommentCard from '../../../components/comment/CommentCard';
import { getCommentsByPost } from '../../../utils/data/postData';

export default function ViewComments() {
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getCommentsByPost(id).then(setComments);
  }, [id]);

  const handleClick = () => {
    router.push(`/posts/${id}`);
  };
  return (
    <div>
      <h2>Comments</h2>
      <Button onClick={() => { router.push(`/posts/${id}/comments/new`); }}>Add a Comment</Button>
      {comments.map((comment) => (
        <section
          key={`comment--${comment.id}`}
          className="comment"
        >
          <CommentCard commentObj={comment} />
        </section>
      ))}
      <hr />
      <Button variant="outline-dark" className="m-2" onClick={handleClick}>Return To Post</Button>
    </div>
  );
}
