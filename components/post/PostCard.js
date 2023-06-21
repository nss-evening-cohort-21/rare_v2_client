import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

function PostCard({ postObj }) {
  return (
    <Card className="text-center">
      <Card.Header>{postObj.title}</Card.Header>
      <Card.Body>
        <Card.Title>Posted by: {postObj.rare_user_id.first_name} {postObj.rare_user_id.last_name}</Card.Title>
        <Card.Text>Category: {postObj.category_id.label}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Posted on: {postObj.publication_date}</Card.Footer>
      <Button type="button" className="m-2">View Comments</Button>
      <Link href={`/posts/${postObj.id}`} passHref>
        <Button type="button" className="m-2">Edit Post</Button>
      </Link>
      <Button type="button" className="m-2">Delete Post</Button>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    rare_user_id: PropTypes.shape({
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
};

export default PostCard;
