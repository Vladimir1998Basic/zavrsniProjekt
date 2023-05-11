import React, { useState } from "react";
import "./InputNewAnimal.css";
import axios from "axios";

function InputNewAnimal({ setPet }) {
  const [addAnimal, setAddAnimal] = useState({
    name: "",
    type: "",
    years: "",
    adopted: false,
    remark: "",
    chip: true,
    lastCheckup: "",
    image: "slika",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddAnimal({ ...addAnimal, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/pets", addAnimal);

    const rez = await axios.get("/pets");
    setPet(rez.data);
  };

  return (
    <>
      <h2>Dodaj novu životinju u azil😁</h2>
      <form onSubmit={handleSubmit} className="InputNewAnimal">
        <label className="name">
          Ime:
          <input
            onChange={handleChange}
            value={addAnimal.name}
            type="text"
            id="name"
            name="name"
            placeholder="Unesi ime životinje..."
            htmlFor="Name"
            required
          ></input>
        </label>
        <label onChange={handleChange} className="type">
          <select name="type" id="type" required>
            <option value="" disabled selected>
              Odaberi vrstu
            </option>
            <option value={1}>Pas</option>
            <option value={2}>Mačka</option>
            <option value={3}>Papiga</option>
            <option value={4}>Kornjača</option>
            <option value={5}>Konj</option>
            <option value={6}>Jež</option>
            <option value={7}>Ostale životinje</option>
          </select>
        </label>
        <label className="years">
          Unesi godine:
          <input
            value={addAnimal.years}
            onChange={handleChange}
            placeholder="Unesi godine"
            name="years"
            type="text"
            id="years"
            required
          ></input>
        </label>
        <label className="cip">
          Čipiran
          <input
            className="true"
            type="checkbox"
            value={addAnimal.chip}
          ></input>
        </label>
        <label className="lastCheckup">
          Zadnji pregled:
          <input
            type="date"
            name="lastCheckup"
            value={addAnimal.lastCheckup}
            onChange={handleChange}
          />
        </label>
        <label className="remark" htmlFor="message">
          Opis:
        </label>
        <textarea
          className="textarea"
          name="message"
          value={addAnimal.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default InputNewAnimal;
