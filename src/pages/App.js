import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Apply from './pages/Apply.jsx';
import Cgp from './pages/Cgp.jsx';
import Payment from './pages/Payment.jsx';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/apply">Apply</Link></li>
            <li><Link to="/Cgp">Apply</Link></li>
            <li><Link to="/Payment">Payment</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/Cgp" element={<Cgp />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;