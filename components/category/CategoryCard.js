import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleCategory } from '../../utils/data/categoryData';

const CategoryCard = ({
  id,
  label,
  onUpdate,
}) => {
  const deleteCategory = () => {
    if (window.confirm('Delete Category?')) {
      deleteSingleCategory(id).then(() => onUpdate());
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>{label}</Card.Header>
      <Link href={`/categories/edit/${id}`} passHref>
        <Button variant="outline-dark" className="m-2">EDIT</Button>
      </Link>
      <Button variant="outline-dark" className="m-2" onClick={deleteCategory}>
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
