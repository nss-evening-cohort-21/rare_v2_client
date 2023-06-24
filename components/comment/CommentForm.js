import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { createComment, updateComment } from '../../utils/data/commentData';
import { useAuth } from '../../utils/context/authContext';
import { getPosts } from '../../utils/data/postData';

const initialState = {
  content: '',
  createdOn: '',
  postId: '',
  authorId: '',
};

export default function CommentForm({ obj, postObj }) {
  const [currentComment, setCurrentComment] = useState(initialState);
  const [, setPosts] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const date = new Date();
  // Get year, month, and day from the date
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: '2-digit' });
  const day = date.toLocaleString('default', { day: '2-digit' });
  const time = date.toLocaleTimeString('en-US', { hour12: false });
  // Generate yyyy-mm-dd date string
  const yearDate = `${year}-${month}-${day}`;
  const createdDate = `${yearDate} ${time}`;

  useEffect(() => {
    getPosts(obj.id).then(setPosts);
    if (obj.id) {
      setCurrentComment({
        id: obj.id,
        content: obj.content,
        authorId: obj.author_id,
        postId: obj.post_id,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const commentUpdate = {
        id: obj.id,
        content: currentComment.content,
        createdOn: createdDate,
        postId: currentComment.postId,
        authorId: user.id,
      };
      updateComment(commentUpdate).then(() => router.push(`/posts/${obj.post_id}/comments`));
    } else {
      const comment = {
        content: currentComment.content,
        createdOn: createdDate,
        postId: postObj.id,
        authorId: user.id,
      };
      createComment(comment).then(() => router.push(`/posts/${postObj.id}/comments`));
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Content"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              type="content"
              placeholder="Write comment here"
              name="content"
              value={currentComment.content}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

CommentForm.propTypes = {
  obj: PropTypes.shape({
    content: PropTypes.string,
    created_on: PropTypes.string,
    author_id: PropTypes.number,
    post_id: PropTypes.number,
    id: PropTypes.number,
  }),
  postObj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

CommentForm.defaultProps = {
  obj: initialState,
};
