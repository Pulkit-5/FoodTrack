import React, { useEffect, useState, useRef, useCallback } from 'react';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';
import './Home.css';

const Home = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const [barcode, setBarcode] = useState('');
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'product_name', direction: 'ascending' });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
  const observer = useRef(); 

  const sortProducts = (products, key, direction) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (key === 'product_name') {
        return direction === 'ascending'
          ? a.product_name.localeCompare(b.product_name)
          : b.product_name.localeCompare(a.product_name);
      } else if (key === 'nutrition_grade_fr') {
        return direction === 'ascending'
          ? a.nutrition_grade_fr.localeCompare(b.nutrition_grade_fr)
          : b.nutrition_grade_fr.localeCompare(a.nutrition_grade_fr);
      }
      return 0;
    });
    return sortedProducts;
  };

  useEffect(() => {
    let url;
    if (!input && !category && !barcode) return;

    if (barcode) {
      url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
    } else if (input) {
      url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${input}&json=true&page=${page}`;
    } else if (category) {
      url = `https://world.openfoodfacts.org/category/${category}.json?page=${page}`;
    }

    const search = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        let fetchedProducts;

        if (data.product) {
          fetchedProducts = [data.product];
        } else {
          fetchedProducts = data.products || [];
        }
        
        if (fetchedProducts.length === 0) {
          setHasMore(false); 
        }

        const sortedProducts = sortProducts(fetchedProducts, sortConfig.key, sortConfig.direction);
        setProducts((prevProducts) => [...prevProducts, ...sortedProducts]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    search();
  }, [input, category, barcode, sortConfig, page]);

  const handleSortChange = (e) => {
    const [key, direction] = e.target.value.split('|');
    setSortConfig({ key, direction });
    setProducts([]); 
    setPage(1); 
  };

  const lastProductElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    if (!barcode) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); 
        }
      });
      if (node) observer.current.observe(node);
    }
  }, [hasMore, barcode]);

  return (
    <div>
      <Navbar setInput={setInput} setBarcode={setBarcode} />
      <div className="sort-controls">
        <CategoryFilter className="category-button" setCategory={setCategory} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" onChange={handleSortChange}>
            <option value="product_name|ascending">Name (A-Z)</option>
            <option value="product_name|descending">Name (Z-A)</option>
            <option value="nutrition_grade_fr|ascending">Nutrition Grade (A-Z)</option>
            <option value="nutrition_grade_fr|descending">Nutrition Grade (Z-A)</option>
          </select>
        </div>
      </div>
      {(input || category || barcode) && (
        <div className="products-container">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} ref={index === products.length - 1 ? lastProductElementRef : null}>
                <Products product={[product]} />
              </div>
            ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
