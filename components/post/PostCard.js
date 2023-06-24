import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { deletePost } from '../../utils/data/postData';

function PostCard({ postObj, onUpdate }) {
  const user = useAuth();

  const deleteSinglePost = () => {
    if (window.confirm(`Delete ${postObj.title} post?`)) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{postObj.title}</Card.Header>
      <Card.Body>
        <Card.Title>Posted by: {postObj.rare_user_id.first_name} {postObj.rare_user_id.last_name}</Card.Title>
        <Card.Text>Category: {postObj.category_id.label}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Posted on: {postObj.publication_date}</Card.Footer>
      <Link href={`/posts/${postObj.id}`} passHref>
        <Button type="button" className="m-2">View Post</Button>
      </Link>
      <Link href={`/posts/edit/${postObj.id}`} passHref>
        {postObj.rare_user_id.uid === user.user.uid ? (<Button type="button" className="m-2">Edit Post</Button>) : ''}
      </Link>
      <div>
        {postObj.rare_user_id.uid === user.user.uid ? (<Button type="button" className="m-2" onClick={deleteSinglePost}>Delete Post</Button>) : ''}
      </div>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    rare_user_id: PropTypes.shape({
      uid: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    category_id: PropTypes.shape({
      label: PropTypes.string,
    }),
    title: PropTypes.string,
    publication_date: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostCard;
