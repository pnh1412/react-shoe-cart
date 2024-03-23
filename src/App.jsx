import React from 'react';
import './App.css';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
function App() {
  return (
    <CartProvider>
      <div className="mainContent">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;