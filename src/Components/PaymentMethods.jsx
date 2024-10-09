import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PaymentMethods = () => {
  const location = useLocation();
  const { cart, total } = location.state; // Retrieve cart and total from state
  const navigate = useNavigate();

  // Function to handle payment method selection
  const handlePayment = (method) => {
    if (method === "credit-card") {
      navigate("/eway-payment", { state: { cart, total } }); // Navigate to EwayPayment component
    } else if (method === "cash-on-delivery") {
      alert("You selected Cash on Delivery.");
      // Handle cash on delivery payment process here
    }
  };

  return (
    <div className="container mt-4">
      <h2>Choose Payment Method</h2>
      <p>Total Amount: ${total.toFixed(2)}</p>

      {/* Payment methods */}
      <div className="d-flex flex-column align-items-start">
        <button
          className="btn btn-outline-primary mb-3"
          onClick={() => handlePayment("credit-card")}
        >
          Pay with Credit Card
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => handlePayment("cash-on-delivery")}
        >
          Cash on Delivery
        </button>
      </div>
    </div>
  );
};
