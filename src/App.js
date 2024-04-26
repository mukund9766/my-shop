import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import ProductCategories from './components/ProductByCategory';
import ProductDetails from './components/ProductDetails';
import ProductByCategory from './components/ProductByCategory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/categories" element={<ProductCategories/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/products/category/:category" element={<ProductByCategory/>} />            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
