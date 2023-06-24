import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createTag, updateTag } from '../../utils/data/tagData';

const initialState = {
  label: '',
};

const TagForm = ({ tagObj }) => {
  const [currentTag, setCurrentTag] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    // TODO: Get the tag types, then set the state
    if (tagObj.id) {
      setCurrentTag({
        id: tagObj.id,
        label: tagObj.label,
      });
    }
  }, [tagObj]);

  const handleChange = (e) => {
    // TODO: Complete the onChange function
    const { name, value } = e.target;
    setCurrentTag((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();
    if (tagObj.id) {
      const updatedTag = {
        id: tagObj.id,
        label: currentTag.label,
      };
      updateTag(updatedTag).then(() => router.push('/tags'));
    } else {
      const tag = {
        label: currentTag.label,
      };
      createTag(tag).then(() => router.push('/tags'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Label</Form.Label>
          <Form.Control name="label" required value={currentTag.label} onChange={handleChange} type="string" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

TagForm.propTypes = {
  tagObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

TagForm.defaultProps = {
  tagObj: initialState,
};

export default TagForm;
