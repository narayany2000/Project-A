import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({
    product_name: '',
    description: '',
    price_per_unit: 0,
    totalUnits: 0,
    farmerid: sessionStorage.getItem('authenticatedUser'),
    categoryid: '' // Initialize with appropriate value
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9090/farmer/getproduct/${productId}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductDetails(data);
        console.log(productDetails)
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:9090/farmer`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productDetails)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert("Product updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5 border p-4">
      <h2>Update Product</h2>
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="product_name" value={productDetails.product_name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="description" value={productDetails.description} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price Per Unit</label>
          <input type="number" className="form-control" name="price_per_unit" value={productDetails.price_per_unit} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Total Units</label>
          <input type="number" className="form-control" name="totalUnits" value={productDetails.totalUnits} onChange={handleInputChange} />
        </div>

        
      
        <input type="hidden" name="farmerid" value={productDetails.farmerid} onChange={handleInputChange} />
        <input type="hidden" name="categoryid" value={productDetails.categoryid} onChange={handleInputChange} />

        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
