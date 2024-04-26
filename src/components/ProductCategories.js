import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductCategories } from '../service/apiService';
import '../styles/ProductCategories.css';

function ProductCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getProductCategories();
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Product Categories</h1>
      <ul className="list-group">
        {categories.map(category => (
          <li className="list-group-item" key={category}>
            <Link to={`/products/category/${category}`} className="category-link">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCategories;