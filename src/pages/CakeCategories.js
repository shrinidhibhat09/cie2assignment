import React from "react";

function CakeCategories() {
  return (
    <main>
      <h2>Cake Categories</h2>
      <div className="grid">
        <div className="card">
          <img src="/images/chocolate-cake.jpg" alt="Chocolate Cakes" />
          <div className="card-content">
            <h3 className="card-title">Chocolate Cakes</h3>
          </div>
        </div>
        <div className="card">
          <img src="/images/fruit-cake.jpg" alt="Fruit Cakes" />
          <div className="card-content">
            <h3 className="card-title">Fruit Cakes</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CakeCategories;
