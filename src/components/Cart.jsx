import React from 'react';
import { FaTrash } from 'react-icons/fa';

// context
import { useCartContext } from '../context/CartContext';

// components
import SingleImage from './image/ SingleImage';
import Typhography from './image/Typhography';

function Cart() {
  const { cartItems, updateQuantity, removeItem, total, numberProduct, timestamp, handleUpdateTime } = useCartContext();

  return (
    <div className="card">
      <div className="cardTop">
        <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        <div>Total: {numberProduct()}</div>
      </div>
      <div className="cardTitle">
        <span>Update time</span>
        <span className="card_amount" onClick={handleUpdateTime}>{timestamp}</span>
      </div>
      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">{total}</span>
      </div>
      <div className="cardBody">
        {cartItems.map((item, index) => (
          <div className="cardItem" key={index}>
            <div className="cardItem_left">
              <div className="cardItem_image">
                <SingleImage 
                  alt={item.name}
                  src={item.image}
                />
              </div>
            </div>
            <div className="cardItem_right">
              <div className="cardItem_name"><Typhography text={item.name} className="font-bold" /></div>
              <div className="cardItem_price"><Typhography text={item.price} className="font-bold text-[20px]" /></div>
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
