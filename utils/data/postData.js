import { clientCredentials } from '../client';

const getPosts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCommentsByPost = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${id}/comments`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSinglePost = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const createPost = (post) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePost = (post) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deletePost = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getPostsByUserId = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/myposts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

export {
  getPosts, createPost, getCommentsByPost, getSinglePost, updatePost, deletePost, getPostsByUserId,
};
