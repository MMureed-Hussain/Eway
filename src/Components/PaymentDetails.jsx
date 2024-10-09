import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PaymentDetails = () => {
  const location = useLocation();
  const { cart, total } = location.state; // Retrieve cart and total from location state
  const navigate = useNavigate();

  // Function to handle Pay Now button click
  const handlePayNow = () => {
    navigate("/payment-methods", { state: { cart, total } });
  };

  return (
    <div className="container mt-4">
      <h2>Payment Details</h2>

      {/* List of selected products */}
      <ul className="list-group mb-4">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>
                Price: ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <span>
              {/* Show total for this specific product */}
              Total: ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      {/* Display total amount for all products */}
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total Amount</h4>
        <h4>${total.toFixed(2)}</h4>
      </div>

      {/* Pay Now button */}
      <button className="btn btn-primary mt-3" onClick={handlePayNow}>
        Pay Now
      </button>
    </div>
  );
};
