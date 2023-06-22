// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { createEvent, createPost } from '../../utils/data/postData';

// const initialState = {
//   rareUserId: 0,
//   categoryId: 0,
//   title: '',
//   imageUrl: '',
// };

// const PostForm = ({ user, postObj }) => {
//   const [currentPost, setCurrentPost] = useState(initialState);
//   const router = useRouter();

//   useEffect(() => {
//     if (postObj.id) setCurrentPost(postObj);
//   }, [postObj]);

//   const handleChange = (e) => {
//     // TODO: Complete the onChange function
//     const { name, value } = e.target;
//     setCurrentPost((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     // Prevent form from being submitted
//     e.preventDefault();

//     const post = {
//       rareUserId: Number(postObj.rareUserId),
//       categoryId: Number(postObj.categoryId),
//       title: postObj.title,
//       publicationDate: postObj.publicationDate,
//       imageUrl: postObj.imageUrl,
//       content: postObj.content,
//       approved: Boolean(postObj.approved),
//     };

//     if (postObj.id) {
//       console.warn(postObj);
//     } else {
//       createPost(post).then(() => router.push('/posts'));
//     }
//   };
// };
