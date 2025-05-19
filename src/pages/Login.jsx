import React from 'react';
export default function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}