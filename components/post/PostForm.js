import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createPost } from '../../utils/data/postData';

const initialState = {
  rareUserId: 0,
  categoryId: 0,
  title: '',
  imageUrl: '',
};

const PostForm = ({ postObj }) => {
  const [currentPost, setCurrentPost] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (postObj.id) setCurrentPost(postObj);
  }, [postObj]);

  // const handleChange = (e) => {
  //   // TODO: Complete the onChange function
  //   const { name, value } = e.target;
  //   setCurrentPost((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    if (postObj.id) {
      console.warn(postObj);
    } else {
      const post = {
        rareUserId: Number(currentPost.rareUserId),
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
  }).isRequired,
};

export default PostForm;
