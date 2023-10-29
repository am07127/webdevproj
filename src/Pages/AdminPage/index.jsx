import React from "react";
import Orderitem from "../../Components/orderitem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const host = "http://localhost:3000";
  const [orders, setOrders] = useState([]);
  const [items, setitems] = useState([]);
  const [inventory, inventoryopen] = useState(false);
  const [order, orderopen] = useState(false);

  const getitems = async () => {
    if (inventory) {
      inventoryopen(false);
      return;
    } else {
      inventoryopen(true);
    }
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
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const getorders = async () => {
    if (order) {
      orderopen(false);
      return;
    } else {
      orderopen(true);
    }
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
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      navigate("/adminportal");
    } catch (error) {
      // setMessage(error.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        {!order && !inventory && (
          <div
            className="bg-yellow text-black py-5"
            style={{ paddingBottom: "100px" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h1 className="display-4 mb-4">Welcome Back, Admin!</h1>
                  <p className="lead mb-4">
                    Manage your restaurant with ease using our intuitive admin
                    portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-4 d-flex justify-content-start">
              <button className="btn btn-primary mt-3" onClick={getorders}>
                Get Orders
              </button>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <button className="btn btn-primary mt-3" onClick={getitems}>
                Get Inventory
              </button>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <button className="btn btn-primary mt-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>

        {orders.length > 0 && order && (
          <div className="d-flex flex-wrap justify-content-center">
            {orders.map((order) => (
              <Orderitem key={order._id} order={order} className="m-3" />
            ))}
          </div>
        )}
        {inventory && (
          <ul
            className="list-group mt-3 w-50"
            style={{ paddingBottom: "100px" }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name}
                <span className="badge badge-primary badge-pill">
                  {item.quantity}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
