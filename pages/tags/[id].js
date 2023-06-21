import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleTag } from '../../utils/data/tagData';

export default function ViewTag() {
  const [tagDetails, setTagDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleTag(id).then(setTagDetails);
  }, [id]);

  return (
    <>
      <Head>
        <title> View {tagDetails.label} </title>
      </Head>
      <div className="PD-container">
        <div className="PD-detail-container">
          <h5 className="PD-pin-name">
            Label: {tagDetails.label}
          </h5>
          <Link passHref href="/tags">
            <Button variant="outline-dark" className="m-2">Return To Tags</Button>
          </Link>
        </div>
      </div>
    </>

  );
}
