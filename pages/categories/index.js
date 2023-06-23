import React, { useEffect, useState } from 'react';
import CategoryCard from '../../components/category/categoryCard';
import { getCategories } from '../../utils/data/categoryData';

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  return (
    <article className="categories">
      <h1>Categories</h1>
      {categories.map((category) => (
        <section key={`category--${category.id}`} className="category">
          <CategoryCard id={category.id} label={category.label} onUpdate={getCategories} />
        </section>
      ))}
    </article>
  );
}

export default Home;
