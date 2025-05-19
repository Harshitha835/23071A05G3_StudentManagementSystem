import React from 'react';
export default function Apply() {
  return (
    <div className="container">
      <h2>Apply</h2>
      <form>
        <input type="text" placeholder="Studentname" className="form-control mb-2" />
        <input type="text" placeholder="Collegename" className="form-control mb-2" />
        <input type="number" placeholder="CGPA" className="form-control mb-2" />
        <input type="text" placeholder="Role" className="form-control mb-2" />
        <input type="text" placeholder="Companyname" className="form-control mb-2" />
        <button className="btn btn-primary">Payment</button>
      </form>
    </div>
  );
}