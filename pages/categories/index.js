import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import CategoryCard from '../../components/category/categoryCard';
import { getCategories } from '../../utils/data/categoryData';

function Home() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    getCategories().then((data) => setCategories(data));
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <article className="categories">
      <Link href="/categories/new" passHref>
        <Button variant="outline-dark" className="m-2">Create Category</Button>
      </Link>
      <h1>Categories</h1>
      {categories.map((category) => (
        <section key={`category--${category.id}`} className="category">
          <CategoryCard id={category.id} label={category.label} onUpdate={getAllCategories} />
        </section>
      ))}
    </article>
  );
}

export default Home;
