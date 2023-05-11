// import "./CheckBox.css";
// import { useContext } from "react"
// import AdminContext from "./AdminContext";
// import React from 'react';

// function CheckBox({ changeRole }) {

// const role = useContext(AdminContext)
// console.log(role)
 
//   return (
//     <label>
//       <input type="checkbox" role="switch" onChange={changeRole} id="flexSwitchCheckDefault" />
//       Admin
//     </label>
//   );
// }

// export default CheckBox;



import "./CheckBox.css";
import { useContext } from "react";
import AdminContext from "./AdminContext";

function CheckBox() {
  const { role, setRole } = useContext(AdminContext);

  const handleChange = () => {
    setRole(role === "admin" ? "korisnik" : "admin");
  };

  return (
    <label>
      <input
        type="checkbox"
        role="switch"
        checked={role === "admin"}
        onChange={handleChange}
        id="flexSwitchCheckDefault"
      />
      Admin
    </label>
  );
}

export default CheckBox;

