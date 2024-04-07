import React, { createContext, useState, useEffect } from 'react';
import { dataProducts } from '../mocks/data';

const CartContext = createContext();

const fakeApi = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [timestamp, setTimestamp] = useState(Date.now());


  useEffect(() => {
    fakeApi(dataProducts).then((data) => setProducts(data.data));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // const calculateTotal = () => {
  //   console.log('calculteTotla')
  //   return cartItems
  //     .reduce((total, item) => {
  //       const itemPrice = parseFloat(item.price.replace('$', '')) || 0;
  //       return total + itemPrice * item.quantity;
  //     }, 0)
  //     .toFixed(2);
  // };

  const total = React.useMemo(() => {
    console.log('useMemo total')
    return cartItems
      .reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace('$', '')) || 0;
        return total + itemPrice * item.quantity;
      }, 0).toFixed(2);
  }, [cartItems])

  const numberProduct = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  function handleUpdateTime() {
    setTimestamp(Date.now())
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        timestamp,
        handleUpdateTime,
        addToCart,
        updateQuantity,
        removeItem,
        // calculateTotal,
        numberProduct,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };

export const useCartContext = () =>  React.useContext(CartContext);