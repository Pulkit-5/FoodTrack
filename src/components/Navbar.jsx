import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CiBarcode } from "react-icons/ci";
import { FaBarcode } from "react-icons/fa6";
import './Navbar.css';

const Navbar = ({ setInput, setBarcode }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    setInput(inputValue);
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    const popupInputValue = e.target.elements.popupSearch.value;
    setBarcode(popupInputValue);
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a className="nav-title">Gerich</a>
          <div className="nav-actions">
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                className="search-input"
              />
              <button type="submit" className="action-btn submit-btn">
              <FaSearch />
              </button>
            </form>
            <button className="action-btn barcode-btn" onClick={togglePopup}>
            <FaBarcode />
            </button>
          </div>
        </div>
      </nav>

      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <form onSubmit={handlePopupSubmit}>
              <input
                type="text"
                className="popup-input"
                placeholder="Enter barcode"
                name="popupSearch"
              />
              <div className="popup-actions">
                <button className="action-btn submit-btn" type="submit">
                  Submit
                </button>
                <button className="action-btn close-btn" onClick={togglePopup}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
