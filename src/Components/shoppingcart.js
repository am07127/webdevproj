// src/components/ShoppingCart.js
import React, { useState } from 'react';

const defaultItems = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 },
    { id: 7, name: 'Product 7', price: 70 }
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(defaultItems);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mt-4">
      <div className="card bg-white">
        <div className="card-header bg-dark text-light">
          <h1 className="mb-0">Shopping Cart</h1>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <strong>Total Price: ${getTotalPrice().toFixed(2)}</strong>
          </div>
        </div>
        <div className="card-footer text-right">
          <button className="btn btn-dark">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
