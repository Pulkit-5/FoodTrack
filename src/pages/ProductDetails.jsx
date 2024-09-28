import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  // If product is undefined, return a fallback message or UI
  if (!product) {
    return <div className="recipe-container">Product details not available.</div>;
  }

  return (
    <div className="recipe-container">

      <div className="recipe-header">
        <img src={product.image_small_url} alt={product.product_name} className="recipe-image" />
        <div className="recipe-details">
          <h1 className="recipe-title">{product.product_name}</h1>
          <p className="recipe-labels">{product.labels || "No labels available"}</p>
        </div>
      </div>
      
      <div className="ingredients-section">
        <h2>Ingredients</h2>
        <div className="ingredients-list">
          {/* Check if ingredients_hierarchy exists and map over it */}
          {product.ingredients_hierarchy ? (
            product.ingredients_hierarchy.map((ingredient, index) => (
              <span key={index} className="ingredient-item">
                {ingredient.replace('en:', '').trim()}
              </span>
            ))
          ) : (
            <p>No ingredients available</p>
          )}
        </div>
      </div>

      <div className="nutritional-values">
        <h2>Nutritional Values</h2>
        <div className="nutritional-table">
          <div className="nutrient">
            <span>Carbohydrates:</span>
            <span>{product.nutriments?.carbohydrates ? product.nutriments.carbohydrates + " g" : "-"}</span>
          </div>
          <div className="nutrient">
            <span>Energy:</span>
            <span>{product.nutriments?.energy ? product.nutriments.energy + " kcal" : "-"}</span>
          </div>
          <div className="nutrient">
            <span>Fat:</span>
            <span>{product.nutriments?.fat ? product.nutriments.fat + " g" : "-"}</span>
          </div>
          <div className="nutrient">
            <span>Protein:</span>
            <span>{product.nutriments?.proteins ? product.nutriments.proteins + " g" : "-"}</span>
          </div>
          <div className="nutrient">
            <span>Salt:</span>
            <span>{product.nutriments?.salt ? product.nutriments.salt + " g" : "-"}</span>
          </div>
          <div className="nutrient">
            <span>Sodium:</span>
            <span>{product.nutriments?.sodium ? product.nutriments.sodium + " g" : "-"}</span>
          </div>
          <div className="nutrient">
            <span>Sugars:</span>
            <span>{product.nutriments?.sugars ? product.nutriments.sugars + " g" : "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
