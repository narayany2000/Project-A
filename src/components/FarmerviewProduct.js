
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FarmerviewProduct() {
  const [data, setData] = useState([]);
  const farmerId = sessionStorage.getItem("authenticatedUser");

  useEffect(() => {
    fetch(`http://localhost:9090/${farmerId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Check fetched data in console
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="container-fluid mt-4 bg-light">
      {data.map((product, index) => {
        console.log("Product:", product); // Check product details in console

        return (
          <div
            key={product.id}
            className={`product-container bg-${(index % 6) + 1}`}
          >
            <div className="product-content">
              <div className="product-image">
                {product.picture && typeof product.picture === "string" ? (
                  <img
                    src={`data:image/png;base64,${product.picture}`}
                    alt="Product"
                    className="img-thumbnail"
                    style={{ width: "200px", height: "200px" }}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              {/* ... (rest of the product details) */}
            </div>
            {index !== data.length - 1 && (
              <hr className="product-separator" />
            )}
          </div>
        );
      })}
    </div>
  );
}

