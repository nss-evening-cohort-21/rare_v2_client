import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleCategory } from '../../utils/data/categoryData';

export default function ViewCategory() {
  const [categoryDetails, setCategoryDetails] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleCategory(id).then(setCategoryDetails);
  }, [id]);

  return (
    <>
      <Head>
        <title> View {categoryDetails.label} </title>
      </Head>
      <div className="PD-container">
        <div className="PD-detail-container">
          <h5 className="PD-pin-name">
            Label: {categoryDetails.label}
          </h5>
          <Link passHref href="/categories">
            <Button variant="outline-dark" className="m-2">Return To Categories</Button>
          </Link>
        </div>
      </div>
    </>

  );
}
