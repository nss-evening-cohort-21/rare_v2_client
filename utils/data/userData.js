import { clientCredentials } from '../client';

const getUserByUID = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users?uid=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single user object
    .catch(reject);
});

export default getUserByUID;
