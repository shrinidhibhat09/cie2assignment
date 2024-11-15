import React from "react";
import { useParams } from "react-router-dom";

function CakeDetails() {
  const { id } = useParams();

  return (
    <main>
      <h2>Cake Details</h2>
      <p>Details for Cake ID: {id}</p>
      <p>Ingredients, price, and customizations go here.</p>
    </main>
  );
}

export default CakeDetails;
