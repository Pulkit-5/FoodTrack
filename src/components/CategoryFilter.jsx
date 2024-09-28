import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './CategoryFilter.css';



const CategoryFilter = ({setCategory}) => {
  return (
    <div>

<div className="btn-group">
  <button
    aria-expanded="false"
    className="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown"
    type="button"
  >
    Category
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Beverages')}>Beverages</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Snacks')}>Snacks</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Meats')}>Meats</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Fruits')}>Fruits</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Vegetables')}>Vegetables</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Biscuits')}>Biscuits</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Confectioneries')}>Confectioneries</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Cheese')}>Cheese</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>setCategory('Sauces')}>Sauces</button></li>

  </ul>
</div>

    </div>
  )
}

export default CategoryFilter