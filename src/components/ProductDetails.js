import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../service/apiService';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-4">
      <h1 className="mb-4">{product.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} className="img-fluid product-image" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h4>Description</h4>
          <p>{product.description}</p>
          <h4>Price</h4>
          <p>${product.price}</p>
          <h4>Category</h4>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;