import React from "react";
import Orderitem from "../../Components/orderitem";
import { useState } from "react";

export default function Adminportal() {
  const host = "http://localhost:3000";
  const [orders, setOrders] = useState([]);

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
      setOrders(data);
    }catch(error){
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="Container" style={{paddingBottom:"20px"}}>
        <button onClick={getorders}>Get Orders</button>
      </div>
      {orders.length>0 && (<div className="row my-3 mx-2" style={{paddingBottom:"200px"}}>
        {orders.map((order) => {
          return <Orderitem key={order._id} order={order} />;
        })}
      </div>)}
    </>
  );
}
