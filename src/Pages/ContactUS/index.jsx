import React from "react";
import OrderDetails from "../../Components/orderdetails";
import { useState } from "react";
import { useSelector } from "react-redux";

const styles = {
  form: {
    display: "flex",
  },
  // html: {
  //   minHeight: '100%',
  // },
  body: {
    minHeight: "100%",
    padding: 0,
    margin: 0,
    outline: "none",
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "14px",
    color: "#666",
    lineHeight: "22px",
  },
  h1: {
    position: "absolute",
    margin: 0,
    fontSize: "60px",
    color: "#fff",
    zIndex: 2,
    lineHeight: "83px",
    top: "30px",
  },
  legend: {
    padding: "10px",
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#c9ac1c",
    width: "40%",
    marginLeft: "10px",
  },
  textarea: {
    width: "calc(100% - 12px)",
    padding: "5px",
  },
  testbox1: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    height: "inherit",
    padding: "40px",
    paddingBottom: "100px",
  },
  formContainer: {
    width: "100%",
    padding: "20px",
    borderRadius: "6px",
    background: "#fff",
    boxShadow: "0 0 8px #cea345",
    display: "flex",
  },
  banner: {
    position: "relative",
    height: "250px",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bannerAfter: {
    content: '""',
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  input: {
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    width: "200px",
    padding: "5px",
    flexDirection: "column",
    margin: "0px 20px",
  },
  inputDate: {
    padding: "4px 5px",
  },
  item: {
    position: "relative",
    margin: "10px 0",
  },
  itemSpan: {
    color: "red",
  },
  columns: {
    display: "flex",
    justifyContent: "space-between",
    // justifyContent: '',
    flexDirection: "row",
    flexWrap: "wrap",
    //   width: '60%'
  },
  columnsDiv: {
    width: "48%",
  },
  inputRadioCheckbox: {
    display: "none",
  },
  labelRadio: {
    position: "relative",
    display: "inline-block",
    margin: "5px 20px 15px 0",
    cursor: "pointer",
  },
  questionSpan: {
    marginLeft: "30px",
  },
  questionAnswerLabel: {
    display: "block",
  },
  labelRadioBefore: {
    content: '""',
    position: "absolute",
    left: 0,
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    border: "2px solid #ccc",
  },
  inputRadioCheckedLabelBefore: {
    border: "2px solid #006622",
  },
  labelRadioAfter: {
    content: '""',
    position: "absolute",
    top: "6px",
    left: "5px",
    width: "8px",
    height: "4px",
    border: "3px solid #c9ac1c",
    borderTop: "none",
    borderRight: "none",
    transform: "rotate(-45deg)",
    opacity: 0,
  },
  inputRadioCheckedLabelAfter: {
    opacity: 1,
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
  },
  btnBlock: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  button: {
    width: "150px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "#c9ac1c",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
  },
  buttonHover: {
    background: "#c9ac1c",
  },
  mediaQuery: {
    nameItem: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    cityItem: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    nameItemInput: {
      width: "calc(50% - 20px)",
    },
    nameItemDiv: {
      width: "calc(50% - 20px)",
    },
    nameItemDivInput: {
      width: "97%",
    },
    nameItemDivLabel: {
      display: "block",
      paddingBottom: "5px",
    },
    cash1: {
      width: "50px",
    },
    cash2: {
      width: "100px",
      height: "60px",
      position: "relative",
      left: "300px",
    },
    para1: {
      fontSize: "12px",
      position: "relative",
      bottom: "10px",
    },
  },
  field1: {
    border: "1px solid black",
    width: "50%",
    marginLeft: "20px",
  },
  label: {
    display: "block",
    margin: "0px 20px",
  },
  section1: {
    border: "1px solid black",
    width: "35%",
    // padding: '40px 30px',
    marginLeft: "90px",
  },
  legend1: {
    padding: "10px",
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#c9ac1c",
    width: "40%",
    marginLeft: "10px",
  },
};

function Contactus() {
  const [formdata, setFormdata] = useState({ address: "", phone: "", email: "" });
  const [showAlert, setShowAlert] = useState(false);

  const host = "http://localhost:3000";

  const handleInputChange = (e) => {
    // Update the state when form fields change
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const { address, phone, email  } = formdata;
  const cartItems = useSelector((state) => state.items);

  const putorder = async (address, phone, total = 0) => {
    try {
      // API Call
      const response = await fetch(`${host}/api/orders/addorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, phone, total, cartItems, email}),
      });

      if (response.ok) {
        // If the response is successful (status code 2xx), show the alert
        setShowAlert(true);
      } else {
        // Handle errors if the response is not successful
        console.error("Error sending order details:", response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div style={styles.testbox1}>
        <div>
          {showAlert && (
            <div className="alert alert-primary" role="alert">
              Order Placed Successfully!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setShowAlert(false)}
              ></button>
            </div>
          )}
        </div>
        <form style={styles.formContainer}>
          <fieldset style={styles.field1}>
            <legend style={styles.legend}>Contact Information</legend>
            <div style={styles.columns}>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="fname">
                  First Name<span>*</span>
                </label>
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  style={styles.input}
                />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="lname">
                  Last Name<span>*</span>
                </label>
                <input
                  id="lname"
                  type="text"
                  name="lname"
                  style={styles.input}
                />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="emailaddress">
                  Email Address<span>*</span>
                </label>
                <input
                  id="emailaddress"
                  type="text"
                  name="email"
                  style={styles.input}
                  value={formdata.email}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  style={styles.input}
                  value={formdata.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="saddress">
                  Street Address
                </label>
                <input
                  id="saddress"
                  type="text"
                  name="address"
                  style={styles.input}
                  value={formdata.address}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="city">
                  City
                </label>
                <input id="city" type="text" name="city" style={styles.input} />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="zip">
                  Zip/Postal Code
                </label>
                <input id="zip" type="text" name="zip" style={styles.input} />
              </div>
              <div style={styles.item}>
                <label style={styles.label} htmlFor="country">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  name="text"
                  style={styles.input}
                />
              </div>
            </div>
          </fieldset>
          <fieldset style={styles.section1}>
            <legend style={styles.legend1}>Order Information</legend>
            <OrderDetails />
          </fieldset>
        </form>
      </div>
      <div style={styles.btnBlock}>
        <button
          style={styles.button}
          type="submit"
          href="/"
          onClick={() => putorder(address, phone)}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Contactus;
