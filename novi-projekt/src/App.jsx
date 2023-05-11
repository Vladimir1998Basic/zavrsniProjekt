import "./App.css";
import Container from "./Components/Container";
import { useState, useEffect } from "react";
import AdminContext from "./Components/AdminContext";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers = {
  "content-type": "application/json",
};

function App() {
  const [role, setRole] = useState("user");

  function changeRole() {
    setRole(role == "user" ? "admin" : "user");
  }

  const [pet, setPet] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/pets").then((res) => setPet(res.data));
  }, []);

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchTypes = axios.get("/types");

      const requirementArray = fetchTypes;

      try {
        const res = await Promise(requirementArray);

        setTypes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <AdminContext.Provider value={role}></AdminContext.Provider>
      <Container pet={pet} setPet={setPet} types={types} setTypes={setTypes} />
    </div>
  );
}

export default App;
