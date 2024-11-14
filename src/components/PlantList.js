import React from "react";
import PlantCard from "./PlantCard";

function PLantList({plants, setPlants}) {
    return (
        <div id="container">
            <ul className="card">
                {plants.length > 0 ? plants.map((planty) => (
                    <li key={planty.id}>
                        <PlantCard 
                        name={planty.name}
                        image={planty.image}
                        price={planty.price}
                        id={planty.id}
                        plants={plants}
                        setPlants={setPlants}
                        />
                    </li>
                )):null}
            </ul>
        </div>
    )
}

export default PLantList