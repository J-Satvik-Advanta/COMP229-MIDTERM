import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import SignUpUser from './pages/SignUpUser';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container-fluid mt-5 text-center">
        <h1 className="mb-4">Home Page</h1>
        <div className="d-flex justify-content-center">
          <Link to="/add-product" className="btn btn-primary me-2">Add Product</Link>
          <Link to="/sign-up" className="btn btn-secondary">Sign Up User</Link>
        </div>
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/sign-up" element={<SignUpUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
