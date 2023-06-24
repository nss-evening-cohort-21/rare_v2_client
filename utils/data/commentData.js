import { clientCredentials } from '../client';

const getComments = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleComment = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createComment = (comment) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const updateComment = (comment) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const deleteComment = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment,
};
