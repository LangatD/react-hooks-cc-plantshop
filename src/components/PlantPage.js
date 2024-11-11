import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 

  // Fetching plants from API
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add a new plant to the state and API
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => setPlants([...plants, addedPlant]));
  };

  
  const handleUpdatePlant = (updatedPlant) => {
    setPlants(plants.map((plant) => (plant.id === updatedPlant.id ? updatedPlant : plant)));
  };

  
  const handleDeletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" })
      .then(() => setPlants(plants.filter((plant) => plant.id !== id)));
  };

  // Filter plants based on the search 
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList
        plants={displayedPlants}
        onUpdatePlant={handleUpdatePlant}
        onDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
