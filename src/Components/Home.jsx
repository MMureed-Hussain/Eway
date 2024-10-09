import React, { useState } from "react";
import products from "../ProductsList/Products";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is new, add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Update the total price
    setTotal(total + product.price);
  };

  // Proceed to payment with all selected items
  const proceedToPayment = () => {
    navigate("/payment", { state: { cart, total } });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  {/* Add to Cart button */}
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-4">
          <h4>Cart Summary</h4>
          {cart.length > 0 ? (
            <>
              <ul className="list-group mb-4">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <p>Total Price: ${total.toFixed(2)}</p>
              <button className="btn btn-success" onClick={proceedToPayment}>
                Proceed to Payment
              </button>
            </>
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
      </div>
    </>
  );
};
