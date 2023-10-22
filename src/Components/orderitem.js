import React from "react";

const OrderItem = ({ order }) => {
  const { _id, address, phone, items } = order;
  const host = "http://localhost:3000";
  const deleteorder = async () => {
    // API Call
    const response = await fetch(`${host}/api/orders/deleteorder/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log(json)

    console.log("Deleting the note with id " + _id);
    alert("Order Deleted Successfully, Refresh the page to see the changes");
  }

  return (
    <div class="card">
      <div class="card-body">
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>

        <h4>Items</h4>
        {items.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <button type="button" class="btn btn-danger" onClick={()=>deleteorder()}>Remove Order</button>
    </div>
  );
};

export default OrderItem;
