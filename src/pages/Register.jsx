import React from 'react';
export default function Register() {
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" className="form-control mb-2" />
        <input type="text" placeholder="Gender" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <input type="Email" placeholder="Email" className="form-control mb-2" />
        <input type="number" placeholder="Phonenumber" className="form-control mb-2" />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}