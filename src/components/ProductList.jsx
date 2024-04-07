import React from 'react';
import { useCartContext } from '../context/CartContext';

function ProductList() {
  const { products, addToCart } = useCartContext();

  return (
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
  );
}

export default ProductList;