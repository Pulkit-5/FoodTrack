
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { createContext, useState } from 'react';
import ProductDetails from './pages/ProductDetails';

export const UserContext = createContext();


function App() {
 
  const [recipe,setRecipe]= useState();

  return (
     <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{recipe,setRecipe}}>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/productdetails' element={<ProductDetails/>}></Route>

         </Routes>
         </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
