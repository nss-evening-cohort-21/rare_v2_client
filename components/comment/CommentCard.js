import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getCommentsByPost } from '../../utils/data/postData';

export default function CommentCard({ commentObj }) {
  const [, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getCommentsByPost(id).then(setComments);
    console.warn(commentObj);
  }, [id]);

  return (
    <div>
      <Card className="commentCard">
        <div className="commentContainer">
          <Card.Header>{commentObj.created_on}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                {commentObj.content}
                {' '}
              </p>
              <footer className="blockquote-footer">
                {commentObj.author_id.first_name} {commentObj.author_id.last_name}
                <br />
                <button type="button">Delete</button>
              </footer>
            </blockquote>
          </Card.Body>
        </div>
      </Card>

    </div>
  );
}

CommentCard.propTypes = {
  commentObj: PropTypes.shape({
    created_on: PropTypes.string,
    content: PropTypes.string,
    author_id: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
};
