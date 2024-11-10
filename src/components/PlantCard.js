import React, { useState } from "react";

function PlantCard({ id, name, image, price, soldOut, toggleSoldOut, editPrice, deletePlant }) {
  const [newPrice, setNewPrice] = useState(price);
  const [editing, setEditing] = useState(false);

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value)
  }

  const handleSavePrice = () => {
    if (!isNaN(newPrice) && newPrice > 0) {
      editPrice(id, parseFloat(newPrice))
      setEditing(false)
    } else {
      alert("INvalid price")
    }
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>

      <p>
        Price:{" "}
        {editing ? (
          <input
            type="number"
            value={newPrice}
            onChange={handlePriceChange}
            step="0.01"
          />
        ) : (
          `$${price.toFixed(2)}`
        )}
      </p>

      {editing ? (
        <button onClick={handleSavePrice}>Save Price</button>
      ) : (
        <button onClick={() => setEditing(true)}>Edit Price</button>
      )}

      {soldOut ? (
        <button onClick={toggleSoldOut}>Out of Stock</button>
      ) : (
        <button onClick={toggleSoldOut} className="primary">
          In Stock
        </button>
      )}

      <button onClick={() => deletePlant(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;

