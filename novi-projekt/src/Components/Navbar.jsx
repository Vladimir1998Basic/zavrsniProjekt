// import React from "react";
// import "./Navbar.css";
// import CheckBox from "./CheckBox";

// function Navbar() {

//   const scrollToTop = () => {
//     const header = document.querySelector('header');
//     header.scrollIntoView({ behavior: 'smooth' });
//   };


//   const handleNavClick = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav>
//       <ul>
//       <li>
//   <a href="#" onClick={scrollToTop}>
//     Početna
//   </a>
// </li>
//         <li onClick={() => handleNavClick("about-section")}>O nama</li>
//         <li onClick={() => handleNavClick("list-section")}>Popis</li>
//         <li onClick={() => handleNavClick("donations-section")}>Donacije</li>
//         <li onClick={() => handleNavClick("notifications-section")}>Obavijesti</li>
//         <li onClick={() => handleNavClick("contact-section")}>Kontakt</li>
//         <CheckBox />
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;





import React from "react";
import "./Navbar.css";
import CheckBox from "./CheckBox";

function Navbar({handleChange}) {

  const scrollToTop = () => {
    const header = document.querySelector("header");
    header.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={scrollToTop}>
            Početna
          </a>
        </li>
        <li onClick={() => handleNavClick("about-section")}>O nama</li>
        <li onClick={() => handleNavClick("list-section")}>Popis</li>
        <li onClick={() => handleNavClick("donations-section")}>Donacije</li>
        <li onClick={() => handleNavClick("notifications-section")}>
          Obavijesti
        </li>
        <li onClick={() => handleNavClick("contact-section")}>Kontakt</li>
        <CheckBox />
      </ul>
    </nav>
  );
}

export default Navbar;
