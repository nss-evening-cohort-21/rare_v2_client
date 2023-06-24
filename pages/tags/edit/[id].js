import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTag } from '../../../utils/data/tagData';
import TagForm from '../../../components/tag/TagForm';

export default function EditTag() {
  const [editTag, setEditTag] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleTag(id).then(setEditTag);
  }, [id]);

  return (
    <>
      <TagForm tagObj={editTag} />
    </>
  );
}
