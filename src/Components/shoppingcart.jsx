// src/components/ShoppingCart.js
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from '../state';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.items);
  const dispatch = useDispatch()
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price*item.quantity;
    });
    return total.toFixed(2);
  };

  const handleRemove = (item) => {
    dispatch(actionCreators.removeitem(item));
  }

  

  

  return (
    <div className="container mt-4">
      <div className="card bg-white">
        <div className="card-header bg-dark text-light">
          <h1 className="mb-0">Shopping Cart</h1>
        </div>
        <div className="card-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                  <button type="button" class="btn btn-warning" onClick={()=>handleRemove(item)}>-</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <strong>Total Price: ${getTotalPrice()}</strong>
          </div>
        </div>
        <div className="card-footer text-right">
          <Link to="/contactus"><button className="btn btn-dark">Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
