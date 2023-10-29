import React from "react";
import Orderitem from "../../Components/orderitem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const host = "http://localhost:3000";
  const [orders, setOrders] = useState([]);
  const [items, setitems] = useState([]);

  const getitems = async () => {
    try {
      // API Call
      const response = await fetch(`${host}/api/inventory/getitems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setitems(data);
    }catch(error){
      console.error("Error:", error.message);
    }
  };


  const getorders = async () => {
    try {
      // API Call
      const response = await fetch(`${host}/api/orders/getorder`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setOrders(data);
    }catch(error){
      console.error("Error:", error.message);
    }
  };

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
  navigate('/adminportal');

    } catch (error) {
      // setMessage(error.message);
    }
  };

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center',height: 'calc(100vh - 122px)'}}>
      <div className="Container" style={{paddingBottom:"20px"}}>
        <button onClick={getorders}>Get Orders</button>
      </div>
      <button type="button" class="btn btn-outline-dark" onClick={handleLogout}>Logout</button>

      {orders.length>0 && (<div className="row my-3 mx-2" style={{paddingBottom:"200px"}}>
        {orders.map((order) => {
          return <Orderitem key={order._id} order={order} />;
        })}
      </div>)}
      <button type="button" class="btn btn-outline-dark" onClick={getitems}>Get Inventory</button>
      <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {item.name}
          <span className="badge badge-primary badge-pill">{item.quantity}</span>
        </li>
      ))}
    </ul>
      </div>
    </>
  );
}