import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  const editPrice = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then(() => {
        setPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === id ? { ...plant, price: newPrice } : plant
          )
        );
      })
      .catch((error) => console.error("Error updating price:", error));
  };

  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlants((oldPlants) => oldPlants.filter((plant) => plant.id !== id));
      })
      .catch((error) => console.error("Error deleting plant:", error));
  };

  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => (
          <li key={plant.id}>
            <PlantCard
              id={plant.id}
              name={plant.name}
              image={plant.image}
              price={plant.price}
              soldOut={plant.soldOut}
              editPrice={editPrice}
              deletePlant={deletePlant}
            />
          </li>
        ))
      ) : null ()}
    </ul>
  );
}

export default PlantList;
