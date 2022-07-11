import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import "./App.css";

import ProductList from './Container/ProductList';
import Header from './Container/Header';
import ProductDetails from './Container/ProductDetails';
import CartBox from './CartBox';

export default function App() {
  return (
    <>
      <div className='app'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/details/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<CartBox />} />
            <Route>404 Page Not Found...!</Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}