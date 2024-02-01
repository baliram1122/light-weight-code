import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';
import './App.css';
import Home from './pages/Home';
import Products from './components/Products';
import Cart from './pages/Cart';
import FavProducts from './pages/FavProducts';
import AllProducts from './pages/AllProducts';

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/singleproduct/:id' element={<SingleProduct/>} />
          <Route path='/favoriteproduct' element={<FavProducts/>} />
          <Route path='/allproducts' element={<AllProducts/>} />
        </Routes>
      </BrowserRouter> 
    )
}

export default App;









