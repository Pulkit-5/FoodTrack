
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';



function App() {
 
  return (
     <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/productdetails' element={<ProductDetails/>}></Route>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
