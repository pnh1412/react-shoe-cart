import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const { cartItems, updateQuantity, removeItem, calculateTotal, numberProduct } = useContext(CartContext);

  return (
    <div className="card">
      <div className="cardTop">
        <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        <div>Total: {numberProduct()}</div>
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
  );
}

export default Cart;
