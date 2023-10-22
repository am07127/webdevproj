import React from 'react';
import { useSelector } from 'react-redux';

const OrderDetails = () => {

  const items = useSelector(state => state.items);
  const gettotalprice = () => {
    let total = 0;
    items.forEach(item => {
      total = total + item.price*item.quantity;
    });
    return total.toFixed(2);
  }
  return (
    <div className="container">
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>  
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><strong>Total:</strong> {gettotalprice()}</p>


    </div>
  );

}

export default OrderDetails;