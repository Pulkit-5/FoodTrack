Project Overview
This web application allows users to search, filter, and view detailed information about food products from the OpenFoodFacts API. Users can explore various products, filter them by category, and sort the results based on multiple criteria such as product name and nutrition grade. The app also provides detailed information about each product, including its ingredients and nutritional values, offering an intuitive and user-friendly experience.

Features
Search Functionality: Users can search for products by entering keywords or scanning barcodes.
Category Filter: Products can be filtered based on various categories like Beverages, Snacks, Fruits, etc.
Sorting Options: Users can sort the products alphabetically by name or by their nutrition grade.
Infinite Scrolling: The app implements infinite scrolling, loading more products as the user scrolls down.
Detailed Product Information: Clicking on any product displays its detailed information, including ingredients, nutritional values, and more.
Technology Stack
React.js: For building the user interface.
React Router: For navigation between pages.
OpenFoodFacts API: To fetch product data.
CSS: For styling the application.
Bootstrap (Removed later): Originally used for some UI components but replaced by custom CSS for a more dynamic and responsive design.
JavaScript (ES6+): Used for handling logic, state, and API calls.
How It Works
API Integration: The app fetches data from the OpenFoodFacts API based on user input or category selection.
Product Display: Products are displayed in a grid format, with options for sorting by product name and nutrition grade.
Search by Barcode: Users can enter a barcode to search for a specific product directly.
Product Details Page: Clicking on a product card navigates to a detailed page displaying more information about the selected product.
Infinite Scroll: Additional products are loaded dynamically as the user scrolls down, improving user experience by reducing load times.
File Structure
App.js: Main entry point containing the router and routes for Home and ProductDetails pages.
Home.js: Manages product search, category filtering, and sorting. Implements infinite scrolling.
Products.js: Displays product information and handles navigation to detailed views.
ProductDetails.js: Displays detailed information about a product, including ingredients and nutritional values.
Navbar.js: Contains the search bar and barcode scanning functionality.
CategoryFilter.js: Handles product filtering by categories.
CSS Files: Custom styling for various components, ensuring a responsive and visually appealing layout.
Challenges and Solutions
1. Infinite Scrolling
Challenge: Implementing infinite scrolling to dynamically load products without overwhelming the user.
Solution: Used the Intersection Observer API to detect when the user scrolls to the bottom and dynamically fetch more products while managing state effectively.
2. Sorting Mechanism
Challenge: Sorting products by multiple criteria such as name and nutrition grade.
Solution: Implemented a flexible sorting function to handle different sorting conditions, allowing users to toggle between ascending and descending orders.
3. Barcode Search
Challenge: Allowing users to search by barcode and fetch a specific product.
Solution: Used the OpenFoodFacts API to directly fetch a product based on barcode input, presenting the product's detailed information upon successful search.
Time Taken
This app was built over the course of approximately 5 days, from setting up the basic structure to implementing advanced features like infinite scrolling and sorting functionality.
