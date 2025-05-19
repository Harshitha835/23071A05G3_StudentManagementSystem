import React from 'react';
export default function Payment() {
  return (
    <div className="container">
      <h2>Payment</h2>
      <form>
        <input type="number" placeholder="Credit/Debit" className="form-control mb-2" />
       <input type="number" placeholder="UPI" className="form-control mb-2" />
        <button className="btn btn-primary">Apply</button>
      </form>
    </div>
  );
}