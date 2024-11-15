import React from "react";

function Home() {
  return (
    <main>
      <h2>Welcome to Cake Shop</h2>
      <p>Your one-stop shop for delicious cakes!</p>
      <div className="grid">
        <div className="card">
          <img src="/images/chocolate-cake.jpg" alt="Chocolate Cake" />
          <div className="card-content">
            <h3 className="card-title">Chocolate Cake</h3>
            <p>Rich and creamy chocolate delight.</p>
          </div>
        </div>
        <div className="card">
          <img src="/images/fruit-cake.jpg" alt="Fruit Cake" />
          <div className="card-content">
            <h3 className="card-title">Fruit Cake</h3>
            <p>A blend of fresh and juicy fruits.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
