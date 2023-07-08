import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCategory } from '../../../utils/data/categoryData';
// eslint-disable-next-line
import CategoryForm from '../../../components/category/CategoryForm';

export default function EditCategory() {
  const [editCategory, setEditCategory] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleCategory(id).then(setEditCategory);
  }, [id]);

  return (
    <>
      <CategoryForm categoryObj={editCategory} />
    </>
  );
}
