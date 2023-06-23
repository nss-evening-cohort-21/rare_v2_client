import React from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteComment } from '../../utils/data/commentData';

export default function CommentCard({
  commentObj,
  id,
  onUpdate,
}) {
  const router = useRouter();

  const deleteThisComment = () => {
    if (window.confirm('Delete this comment?')) {
      deleteComment(id).then(() => onUpdate());
    }
  };
  console.warn(commentObj);
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
                <button type="button" onClick={() => router.replace(`comments/edit/${id}`)}>Edit</button>
                <button type="button" onClick={deleteThisComment}>Delete</button>
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
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
