import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSinglePost } from '../../utils/data/postData';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSinglePost(id).then(setPostDetails);
  }, [id]);

  const handleClick = () => {
    router.push(`/posts/${id}/comments`);
  };

  return (
    <>
      <Head>
        <title> View {postDetails.title} </title>
      </Head>
      <div className="PD-container">
        <div className="PD-detail-container">
          <h5 className="PD-pin-name">
            {postDetails.title}
          </h5>
          <hr />
          <p className="PD-desc">Name: {postDetails.rare_user_id?.first_name || ''} {postDetails.rare_user_id?.last_name || ''}
          </p>
          <p className="PD-desc">Category: {postDetails.category_id?.label || ''}
          </p>
          <p className="PD-desc">Posted on: {postDetails.publication_date || ''}
          </p>
          <hr />
          <Button variant="outline-dark" className="m-2" onClick={handleClick}>View Comments</Button>
          <Link passHref href="/posts">
            <Button variant="outline-dark" className="m-2">Return To Posts</Button>
          </Link>
        </div>
      </div>
    </>

  );
}
