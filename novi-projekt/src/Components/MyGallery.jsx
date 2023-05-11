import React, { useState, useEffect } from "react";
import "./MyGallery.css";

const MyGallery = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-sX5A-gut6c5DSWYoZgBxCPsWTOPzFKVjw&usqp=CAU",
    "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTHA8sTYngrF9FsGFcsv_vq3_ULeEG7DvrsIJLohckJnRPw4XBAx-Z9wQ6XOhMc-pzpaijFkpUWC86SKqE",
    "https://zoo.hr/wp-content/uploads/2019/05/%C4%8Dan%C4%8Dara-Testudo-hermanni-1620x1080.jpg",
    "https://www.kucni-ljubimci.com/wp-content/uploads/2017/02/koja-vrsta-ptice-je-za-mene-1.jpg",
    "https://proleksis.lzmk.hr/slike1/xxk0414.JPG",
    "https://www.skole.hr/wp-content/uploads/2022/11/sjenica.jpg",
    "https://www.zagreb.info/wp-content/uploads/2022/05/hedgehog-g0993dd153_1920.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => clearInterval(interval);
  });

  const goToPreviousImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const previousIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[previousIndex]);
  };

  const goToNextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div className="MyGallery">
      <img src={currentImage} alt="" />
      <button onClick={goToPreviousImage}>&lt;</button>
      <button onClick={goToNextImage}>&gt;</button>
    </div>
  );
};

export default MyGallery;
