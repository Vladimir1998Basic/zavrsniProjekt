import React, { useState } from "react";
import "./ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      if (!validateEmail(value)) {
        setFormErrors({
          ...formErrors,
          [name]: "Unesite ispravno email adresu.",
        });
      } else {
        setFormErrors({ ...formErrors, [name]: "" });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formErrors.firstName || formErrors.lastName || formErrors.email || formErrors.message) {
      alert("Unesite ispravno podatke.");
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/process-form.php");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formData));
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Vaša poruka je zaprimljena. Odgovorit ćemo vam u što kračem roku.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    };
  };

  return (
    <div className="ContactForm">
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <input
        placeholder="Unesi ime..." 
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="lastName">Last name:</label>
      <input
        placeholder="Unesi prezime..."
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        placeholder="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {formErrors.email && <span className="error">{formErrors.email}</span>}
      <br />
      <label htmlFor="message">Message:</label>
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
