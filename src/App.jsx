import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Men from "./Pages/Men";
import Woman from "./Pages/Woman";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";


import { useState } from "react";
import './App.css';

function App() {
   const [quantity, setQuantity] = useState(0); 
  // const addToCart = (amount) => {
  //   setQuantity(quantity + amount); 
  // };

  // const clearCart = () => {
  //   setQuantity(0); 
  // };
  function test2(quantity){
    setQuantity(quantity)
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout quantity={quantity} setQuantity={setQuantity} />}>
          <Route index element={<Collection />} />
          <Route path="Men" element={<Men />} />
          <Route path="Woman" element={<Woman test2={test2} />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
         
      
    
        </Route> 
        
      </Routes>
      
    </BrowserRouter>
   
    </>
  );
}

export default App;
