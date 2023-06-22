import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerRareUser } from '../utils/auth';

function RegisterForm({ user, updateUser }) {
  const date = new Date();
  // Get year, month, and day from the date
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: '2-digit' });
  const day = date.toLocaleString('default', { day: '2-digit' });
  // Generate yyyy-mm-dd date string
  const registrationDate = `${year}-${month}-${day}`;

  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    profileImageUrl: '',
    email: '',
    createdOn: registrationDate,
    active: true,
    isStaff: false,
    uid: user.uid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerRareUser(formInput).then(() => updateUser(user.uid));

    console.warn(formInput);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First name" name="firstName" value={formInput.firstName} onChange={handleChange} required />

        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last name" name="lastName" value={formInput.lastName} onChange={handleChange} required />

        <Form.Label>User Bio</Form.Label>
        <Form.Control as="textarea" placeholder="Enter your Bio" name="bio" value={formInput.bio} onChange={handleChange} required />

        <Form.Label>Profile Image URL</Form.Label>
        <Form.Control as="textarea" placeholder="Link to your Profile Image" name="profileImageUrl" value={formInput.profileImageUrl} onChange={handleChange} required />

        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" name="email" value={formInput.email} onChange={handleChange} required />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    createdOn: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    isStaff: PropTypes.bool.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
