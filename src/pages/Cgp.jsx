import React from 'react';
export default function Cgp() {
  return (
    <div className="container">
      <h2>Cgp</h2>
      <form>
        <input type="number" placeholder="Sem1 Gpa" className="form-control mb-2" />
        <input type="number" placeholder="Sem2 Gpa" className="form-control mb-2" />
        <input type="number" placeholder="Sem3 Gpa" className="form-control mb-2" />
        <input type="number" placeholder="Overall Cgpa" className="form-control mb-2" />
      </form>
    </div>
  );
}