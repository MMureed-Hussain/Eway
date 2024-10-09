import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome

export const EwayPayment = () => {
  const location = useLocation();
  const { cart, total } = location.state; // Retrieve cart and total from state
  const navigate = useNavigate();

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate E-Way payment processing logic
    alert("Payment successful!"); // Placeholder for payment success message
  };

  const goToHome = () => {
    navigate('/');  // Navigate to the Home page
  };

  return (
    <div className="container mt-5">
      {/* Back Arrow Icon */}
      <div className="mb-4">
        <i
          className="fas fa-arrow-left"
          style={{ cursor: "pointer" }}
          onClick={goToHome}
        ></i>{" "}
        <span style={{ cursor: "pointer" }} onClick={goToHome}>
          Back to Home
        </span>
      </div>

      <h2 className="text-center mb-4">E-Way Payment</h2>
      <p className="text-center">
        Total Amount: <strong>${total.toFixed(2)}</strong>
      </p>

      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Card Holder Name</label>
          <input
            type="text"
            className="form-control"
            name="cardHolder"
            value={cardDetails.cardHolder}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Expiry Date (MM/YY)</label>
            <input
              type="text"
              className="form-control"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};
