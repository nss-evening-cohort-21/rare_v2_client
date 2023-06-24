import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleTag } from '../../utils/data/tagData';

const TagCard = ({
  id,
  label,
  onUpdate,
}) => {
  const deleteTag = () => {
    if (window.confirm('Delete Tag?')) {
      deleteSingleTag(id).then(() => onUpdate());
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>{label}</Card.Header>
      <Link href={`/tags/edit/${id}`} passHref>
        <Button variant="outline-dark" className="m-2">EDIT</Button>
      </Link>
      <Button variant="outline-dark" className="m-2" onClick={deleteTag}>
        DELETE
      </Button>
    </Card>
  );
};

TagCard.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TagCard;
