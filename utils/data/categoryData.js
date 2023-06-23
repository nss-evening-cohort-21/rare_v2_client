import { clientCredentials } from '../client';

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
// eslint-disable-next-line import/prefer-default-export
const createCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const getSingleCategory = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});
const deleteSingleCategory = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const updateCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

export {
  getCategories, createCategory, getSingleCategory, updateCategory, deleteSingleCategory,
};
