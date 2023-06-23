import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import TagCard from '../../components/tag/TagCard';
import { getTags } from '../../utils/data/tagData';

function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((data) => setTags(data));
  }, []);

  return (
    <>
      <Link href="/tags/new" passHref>
        <Button variant="outline-dark" className="m-2">Create Tag</Button>
      </Link>
      <article className="tags">
        <h1>Tags</h1>
        {tags.map((tag) => (
          <section key={`tag--${tag.id}`} className="tag">
            <TagCard id={tag.id} label={tag.label} onUpdate={getTags} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
