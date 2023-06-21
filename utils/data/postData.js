import { clientCredentials } from '../client';

const getPosts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCommentsByPost = (postId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${postId}/comments`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getPosts, getCommentsByPost };
