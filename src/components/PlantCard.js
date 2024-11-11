import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  const handleToggleStock = () => {
    const updatedPlant = { ...plant, isSoldOut: !plant.isSoldOut };
    onUpdatePlant(updatedPlant);
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isSoldOut: updatedPlant.isSoldOut }),
    });
  };

  const handleSavePrice = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    })
      .then((response) => response.json())
      .then(onUpdatePlant);
    setIsEditing(false);
  };

  return (
    <li className="card">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        {isEditing ? (
          <>
            <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
            <button onClick={handleSavePrice}>Save</button>
          </>
        ) : (
          <>Price: ${plant.price}</>
        )}
        <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit Price"}</button>
      </p>
      <button onClick={handleToggleStock} className={plant.isSoldOut ? "" : "primary"}>
        {plant.isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
