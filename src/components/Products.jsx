import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Products = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigation = (product) => {
    navigate('/productdetails', { state: { product } }); // Passing product data to Recipe
  };

  return (
    <div className="products-container">
      {product.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image_small_url} alt={product.product_name} className="product-image" />
          <h3 className="product-name">Name: {product.product_name}</h3>
          <h2 className="ingredients-count">Ingredients: {Array.isArray(product.ingredients_tags) ? product.ingredients_tags.length : 0}</h2>
          <h4 className="nutrition-grade">Nutrition Grade: {product.nutrition_grade_fr}</h4>
          <button className="full-recipe-btn" onClick={() => handleNavigation(product)}>Full Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
