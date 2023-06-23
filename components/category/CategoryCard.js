import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCategory } from '../../utils/data/categoryData';

const CategoryCard = ({
  id,
  label,
  onUpdate,
}) => {
  const deleteThisCategory = () => {
    if (window.confirm('Delete Category?')) {
      deleteCategory(id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{label}</Card.Header>
      <Link href={`/categories/edit/${id}`} passHref>
        <Button variant="outline-dark" className="m-2">EDIT</Button>
      </Link>
      <Button variant="outline-dark" className="m-2" onClick={deleteThisCategory}>
        DELETE
      </Button>
    </Card>
  );
};
CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CategoryCard;
