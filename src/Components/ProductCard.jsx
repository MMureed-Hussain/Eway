import React from "react";

export const ProductCard = ({ products }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{products && products.name}</h5>
            <p className="card-text">${products && products.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
