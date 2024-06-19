import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container-fluid mt-5 text-center">
      <h1 className="mb-5">Home Page</h1>
      <div className="d-flex justify-content-center">
        <Link to="/add-product" className="btn btn-primary me-2">Add Product</Link>
        <Link to="/sign-up" className="btn btn-secondary">Sign Up User</Link>
      </div>
    </div>
  );
};

export default Home;
