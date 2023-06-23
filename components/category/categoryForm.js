import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { updateCategory, createCategory } from '../../utils/data/categoryData';

const initialState = {
  label: '',
};

function CategoryForm({ categoryObj }) {
  const [currentCategory, setCurrentCategory] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    // if the category id exists, set it as the current category object
    if (categoryObj.id) {
      setCurrentCategory({
        id: categoryObj.id,
        label: categoryObj.label,
      });
    }
  }, [categoryObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoryObj.id) {
      const updatedCategory = {
        id: categoryObj.id,
        label: currentCategory.label,
      };
      updateCategory(updatedCategory).then(() => router.push('/categories'));
    } else {
      const category = {
        label: currentCategory.label,
      };
      createCategory(category).then(() => router.push('/categories'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Category Label</Form.Label>
          <Form.Control name="label" required value={currentCategory.label} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

CategoryForm.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

CategoryForm.defaultProps = {
  categoryObj: initialState,
};

export default CategoryForm;
