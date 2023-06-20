import React, { useEffect, useState } from 'react';
import TagCard from '../../components/tag/TagCard';
import { getTags } from '../../utils/data/tagData';

function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((data) => setTags(data));
  }, []);

  return (
    <article className="tags">
      <h1>Tags</h1>
      {tags.map((tag) => (
        <section key={`tag--${tag.id}`} className="tag">
          <TagCard id={tag.id} label={tag.label} onUpdate={getTags} />
        </section>
      ))}
    </article>
  );
}

export default Home;
