import React, { useState, useContext } from "react";
import "./PetList.css";
import AdminContext from "./AdminContext";
import InputNewAnimal from "./InputNewAnimal";

const PetList = () => {
  const ANIMALS = [
    {
      id: 1,
      name: "Hugo",
      type: "Pas",
      adopted: false,
      image:
        "https://blog.healthypawspetinsurance.com/wp-content/uploads/2023/01/doberman-pinscher-dog-standing-in-grass.jpg",
      description: "Ovo je Hugo, veseli pas koji voli dugacke setnje. 🐕",
    },
    {
      id: 2,
      name: "Oscar",
      type: "Pas",
      adopted: false,
      image:
        "https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg",
      description:
        "Oscar je prijateljski nastrojen pas koji se voli igrati sa lopticom. 🐕",
    },
    {
      id: 3,
      name: "Odie",
      type: "Mačka",
      adopted: false,
      image:
        "https://d19p4plxg0u3gz.cloudfront.net/8165751e-8f21-11ec-85ac-0242ac12001e/original.png",
      description: "Odie je slatka maca koja se voli maziti. 😺",
    },
    {
      id: 4,
      name: "Pepe",
      type: "Papiga",
      adopted: true,
      image:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/images2/zako111.jpg?width=480&height=270",
      description: "Ovo je Pepe, raspričana papiga. 🦜",
    },
    {
      id: 5,
      name: "Brzi",
      type: "Kornjača",
      adopted: true,
      image:
        "https://d19p4plxg0u3gz.cloudfront.net/3f590ef2-8f1b-11ec-a4fd-0242ac120021/original.jpeg",
      description: "OVo je kornjača Brzi, pazi da ti ne pobjegne. 🐢",
    },
    {
      id: 6,
      name: "Herkules",
      type: "Konj",
      adopted: false,
      image:
        "https://zoona.hr/wp-content/uploads/2020/11/89664540_s-1280x720.jpg",
      description:
        "Ovo je jaki konj Herkules, on je jako emotivan i voli jesti mrkve 🐎",
    },
    {
      id: 7,
      name: "Ježurko",
      type: "Jež",
      adopted: false,
      image:
        "https://static.jutarnji.hr/images/slike/2021/01/28/k_9993035_640.jpg",
      description:
        "Ovo je mali slatki Ježurko, on jako voli ljenčariti i slušati jazz 🦔",
    },
  ];

  const addNewPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const { role } = useContext(AdminContext);

  const [pets, setPets] = useState(ANIMALS);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);

  const filteredPets = pets.filter((pet) => {
    const nameMatch = pet.name.toLowerCase().includes(nameFilter.toLowerCase());

    const speciesMatch = pet.type
      .toLowerCase()
      .includes(speciesFilter.toLowerCase());

    const statusMatch =
      statusFilter === "" ||
      (statusFilter === "Udomljena" && pet.adopted) ||
      (statusFilter === "Dostupna za usvajanje" && !pet.adopted);

    return speciesMatch && statusMatch && nameMatch;
  });

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleClosePopup = () => {
    setSelectedPet(null);
  };

  const handleAdopt = (pet) => {
    const updatedPets = pets.map((p) => {
      if (p.id === pet.id) {
        const newAdopted = !p.adopted;
        const buttonText = newAdopted ? "Vrati na usvajanje" : "Udomi";
        return { ...p, adopted: newAdopted, buttonText };
      }
      return p;
    });
    setPets(updatedPets);
    setSelectedPet(null);
  };

  const handleDelete = (pet) => {
    const updatedPets = pets.filter((p) => p.id !== pet.id);
    setPets(updatedPets);
  };

  return (
    <div className="PetList">
      <div className="filters">
        <label htmlFor="nameFilter">Ime:</label>
        <input
          type="text"
          id="nameFilter"
          className="filter-input"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <label htmlFor="speciesFilter">Vrsta:</label>
        <input
          type="text"
          id="speciesFilter"
          className="filter-input"
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
        />
        <label htmlFor="statusFilter">Status:</label>
        <select
          id="statusFilter"
          className="filter-input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Svi</option>
          <option value="Udomljena">Udomljena</option>
          <option value="Dostupna za usvajanje">Dostupna za usvajanje</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Vrsta</th>
            <th>Status</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {filteredPets.map((pet) => (
            <tr
              key={pet.id}
              className={pet.adopted ? "adopted" : "not-adopted"}
            >
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.adopted ? "Udomljena" : "Dostupna"}</td>
              <td>
                <button
                  className="action-btn"
                  onClick={() => handlePetClick(pet)}
                >
                  Prikaži
                </button>
                <button
                  className="action-btn"
                  onClick={() => handleDelete(pet)}
                >
                  Obriši
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      {role === "admin" && (
        <InputNewAnimal setPet={setPets} types={[]} addNewPet={addNewPet} />
      )}
      {selectedPet && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>{selectedPet.name}</h2>
            <img
              src={selectedPet.image}
              alt={selectedPet.name}
              className="popup-image"
            />
            <p>{selectedPet.description}</p>
            <p>Vrsta: {selectedPet.type}</p>
            <p>
              Status udomljavanja:{" "}
              {selectedPet.adopted ? "Udomljena" : "Dostupna"}
            </p>
            <button
              className="action-btn"
              onClick={() => handleAdopt(selectedPet)}
            >
              {selectedPet.adopted ? "Vrati na usvajanje" : "Udomi"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetList;
