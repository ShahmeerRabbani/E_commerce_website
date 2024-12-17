import React, { useEffect, useState } from "react";
import { API_URL } from "../Config/Constraints";
import Navbar from "../Components/Navbar/Navbar";

const AddCart = () => {
  const [cart, setCart] = useState([]);
   const [count, setCount] = useState(0)
  const [refresh, setRefresh] = useState(false);
  
  const handleGetCart = () => {
    const storedCart = JSON.parse(sessionStorage.getItem("cartData")) || [];
    setCart(storedCart);
  };

  useEffect(() => {
    handleGetCart();
  }, []);

  const handleRemoveSingleCart = (id) => {
    const storedCart = JSON.parse(sessionStorage.getItem("cartData")) || [];
    const updatedCart = storedCart.filter((item) => item.id !== id);
    sessionStorage.setItem("cartData", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setRefresh(!refresh);
  };


  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }
 
  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }


  const del_style = {
    height: "20px",
    width: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "100px",
    position: "absolute",
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    right: "10px",
    top: "20px",
  };

  return (
    <div className="Add_Cart">
      <Navbar refresh={refresh} />
      <div className="table_data">
        <table className="tables">
          <thead>
            <tr>
              <td>Product Image</td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Product Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {cart.length == 0 ? (
              <tr>
                <td style={{ fontSize: 26, fontWeight: 500 }}>Cart is empty</td>
              </tr>
            ) : (
              cart.map((e, i) => {
                return (
                  <tr key={i} style={{ position: "relative" }}>
                    <td>
                      <img
                        src={`${API_URL}${e.image}`}
                        style={{
                          objectFit: "contain",
                          height: "150px",
                          width: "150px",
                        }}
                      />
                    </td>
                    <td>{e.name}</td>
                    <td>${e.price}</td>
                    <td>
                      <div className="quantity_btn">
                      <p className="quant_btn">
                        <button onClick={() => handleDecrement(e.id)}>-</button>
                        <span>{e.quantity}</span>
                        <button onClick={() => handleIncrement(e.id)}>+</button>
                      </p>
                      </div>
                    </td>
                    <td>
                      ${e.price * e.quantity}
                      <span
                        style={del_style}
                        onClick={() => handleRemoveSingleCart(e.id)}
                        title="Remove cart"
                      >
                        x
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCart;
