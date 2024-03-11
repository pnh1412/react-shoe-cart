import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import './App.css';

// mock data
import { dataProducts } from './mocks/data';

function fakeApi(data) {
  return new Promise(resovle => {
    setTimeout(() => {
      resovle(data);
    }, 1000);
  })
}
function App() {
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = useState([]);

  // initial data products
  React.useEffect(() => {
    fakeApi(dataProducts)
      .then(data => setProducts(data.data))
  }, [])

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

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('$', '')) || 0;
      return total + itemPrice * item.quantity;
    }, 0).toFixed(2);
  };

  const numberProduct= () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="mainContent">
      {/* Products */}
      <div className="card">
        <div className="cardTop">
          <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        </div>
        <div className="cardTitle">Our Products</div>
        <div className="cardBody">
          {products.map((product) => (
            <div className="shopItem" key={product.id}>
              <div className="shopItem_image" style={{ backgroundColor: "rgb(212, 215, 214)" }}>
                <img alt={product.name} src={product.image} />
              </div>
              <div className="shopItem_name">{product.name}</div>
              <div className="shopItem_description">{product.description}</div>
              <div className="shopItem_bottom">
                <div className="shopItem_price">{product.price}</div>
                <div className="shopItem_button" onClick={() => addToCart(product)}>
                  <p>ADD TO CART</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className="card">
        <div className="cardTop">
          <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
          <div>Total: { numberProduct()}</div>
        </div>
        <div className="cardTitle">
          <span>Your cart</span>
          <span className="card_amount">{calculateTotal()}</span>
        </div>
        <div className="cardBody">
          {cartItems.map((item, index) => (
            <div className="cardItem" key={index}>
              <div className="cardItem_left">
                <div className="cardItem_image">
                  <img alt={item.name} src={item.image} />
                </div>
              </div>
              <div className="cardItem_right">
                <div className="cardItem_name">{item.name}</div>
                <div className="cardItem_price">{item.price}</div>
                <div className="cartItem_actions">
                  <div className="cartItem_count">
                    <div className="cartItem_button" onClick={() => updateQuantity(index, item.quantity - 1)}>
                      -
                    </div>
                    <div className="cartItem_number">{item.quantity}</div>
                    <div className="cartItem_button" onClick={() => updateQuantity(index, item.quantity + 1)}>
                      +
                    </div>
                  </div>
                  <div className="carItem_remove" onClick={() => removeItem(index)}>
                    <FaTrash />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;