import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { createComment } from '../../utils/data/commentData';
import { useAuth } from '../../utils/context/authContext';
import { getPosts } from '../../utils/data/postData';

const initialState = {
  content: '',
  createdOn: '',
  postId: '',
};

export default function CommentForm({ obj }) {
  const [currentComment, setCurrentComment] = useState(initialState);
  const [, setPosts] = useState({});
  const router = useRouter();
  const { user } = useAuth();

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
    const comment = {
      content: currentComment.content,
      createdOn: new Date().toLocaleString(),
      postId: currentComment.post_id,
      authorId: user.uid,
    };
    createComment(comment).then(() => router.push('/posts'));
    console.warn(comment);
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
    author_id: PropTypes.string,
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
