import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AddProduct from './pages/add-product';
import SignUpUser from './pages/signup-user';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/sign-up" element={<SignUpUser />} />
      </Routes>
    </Router>
  );
};

export default App;
