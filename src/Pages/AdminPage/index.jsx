import React from "react";
import Orderitem from "../../Components/orderitem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import foodContext from "../../foodcontext/foodContext";
import { useContext } from "react";

export default function AdminPage() {
  const host = "http://localhost:3000";
  const [orders, setOrders] = useState([]);
  const [items, setitems] = useState([]);
  const [inventory, inventoryopen] = useState(false);
  const [order, orderopen] = useState(false);
  const { editorder } = useContext(foodContext);

  const ref = useRef(null)
  const refClose = useRef(null)
  const [selectedorder, setselectedorder] = useState({id: "", eaddress: "", ephone:""})

  const updateorder = (currentorder) => {
    console.log(currentorder);
    ref.current.click()
    setselectedorder({id: currentorder._id, eaddress: currentorder.address, ephone: currentorder.phone})
  }

  const handleclick = (e)=>{
    editorder(selectedorder.id, selectedorder.eaddress, selectedorder.ephone)
    refClose.current.click()
 }

  const onChange = (e) => {
    setselectedorder({ ...selectedorder, [e.target.name]: e.target.value });
  };

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
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Order
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ephone"
                    name="ephone"
                    value={selectedorder.ephone}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eaddress"
                    name="eaddress"
                    value={selectedorder.eaddress}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleclick}
                type="button"
                className="btn btn-primary"
              >
                Update Order
              </button>
            </div>
          </div>
        </div>
      </div>
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
              <Orderitem key={order._id} order={order} updateorder={updateorder} className="m-3" />
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
