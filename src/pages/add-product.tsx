import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log('formData',formData);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Name:</label>
              <input type="text" name="name" className="form-control" placeholder="Enter product name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Description:</label>
              <input type="text" name="description" className="form-control" placeholder="Enter product description" value={formData.description} onChange={handleChange} />
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Category:</label>
              <input type="text" name="category" className="form-control" placeholder="Enter product category" value={formData.category} onChange={handleChange} />
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Quantity:</label>
              <input type="number" name="quantity" className="form-control" placeholder="Enter product quantity" value={formData.quantity} onChange={handleChange} />
            </div>
            <div className="form-group mb-3 text-start">
              <label className="form-label">Price:</label>
              <input type="number" name="price" className="form-control" placeholder="Enter product price" value={formData.price} onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
