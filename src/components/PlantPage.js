import React, { useEffect, useState } from "react";
import AddPlantForm from "./AddPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchPlant,setSearchPlant] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {setPlants(data)})
  },[])
   
   const displayPlant = plants.filter((plantsy) => `${plantsy.name}`.toLowerCase().includes(searchPlant.toLowerCase()))

  return (
    <main>
      <AddPlantForm plants={plants} setPlants={setPlants}/>
      <Search onSearch={setSearchPlant}/>
      <PlantList plants={displayPlant} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;