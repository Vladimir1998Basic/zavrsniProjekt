import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="Location">
    <iframe className="Location"
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.7221822764354!2d16.446570015496143!3d43.51369637912494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13354d9f4abcbfd3%3A0x3d4f4dbcc0a7fd4e!2sLovretska%2013%2C%2021000%2C%20Split!5e0!3m2!1sen!2shr!4v1659128452886!5m2!1sen!2shr"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    </div>
  );
}

export default Location;
