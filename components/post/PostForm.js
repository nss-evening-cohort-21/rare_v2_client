import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPost } from '../../utils/data/postData';
import { getCategories } from '../../utils/data/categoryData';

const date = new Date();
// Get year, month, and day from the date
const year = date.toLocaleString('default', { year: 'numeric' });
const month = date.toLocaleString('default', { month: '2-digit' });
const day = date.toLocaleString('default', { day: '2-digit' });
// Generate yyyy-mm-dd date string
const fullDate = `${year}-${month}-${day}`;

const initialState = {
  rareUserId: 0,
  categoryId: 0,
  title: '',
  publicationDate: fullDate,
  imageUrl: '',
  content: '',
  approved: true,
};

const PostForm = ({ postObj }) => {
  const [currentPost, setCurrentPost] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCategories().then(setCategories);
    if (postObj.id) {
      setCurrentPost({
        id: postObj.id,
        rareUserId: postObj.rare_user_id,
        categoryId: postObj.category_id,
        title: postObj.title,
        publicationDate: postObj.publication_date,
        imageUrl: postObj.image_url,
        content: postObj.content,
        approved: postObj.approved,
      });
    }
  }, [postObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postObj.id) {
      console.warn(postObj);
    } else {
      const post = {
        rareUserId: user.id,
        categoryId: Number(currentPost.categoryId),
        title: currentPost.title,
        publicationDate: currentPost.publicationDate,
        imageUrl: currentPost.imageUrl,
        content: currentPost.content,
        approved: Boolean(currentPost.approved),
      };
      createPost(post).then(() => router.push('/posts'));
    }
  };

  return (
    <>
      <Form.Group className="floatingSelect">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name="categoryId"
          onChange={handleChange}
          className="mb-3"
          value={currentPost.categoryId}
          required
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" required value={currentPost.title} onChange={handleChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control name="imageUrl" required value={currentPost.imageUrl} onChange={handleChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control name="content" required value={currentPost.content} onChange={handleChange} type="text" />
      </Form.Group>
      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          {postObj.id ? 'Update' : 'Create'} Post
        </Button>
      </Form>
    </>
  );
};

PostForm.propTypes = {
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
    content: PropTypes.string,
    approved: PropTypes.bool,
  }),
};

PostForm.defaultProps = {
  postObj: initialState,
};

export default PostForm;
