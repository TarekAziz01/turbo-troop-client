import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../assets/images/slide1.jpg";
import image2 from "../../../assets/images/slide2.jpg";
import image3 from "../../../assets/images/slide3.jpg";
import image4 from "../../../assets/images/slide4.jpg";
import image5 from "../../../assets/images/slide5.jpg";
import image6 from "../../../assets/images/slide6.jpg";
import image7 from "../../../assets/images/slide7.jpg";

const GallerySection = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const sliderRef = useRef(null);

   useEffect(() => {
     const slider = sliderRef.current;
     const autoplayInterval = 3000; // Change this value to adjust the slide duration

     const intervalId = setInterval(() => {
       if (slider) {
         slider.slickNext();
       }
     }, autoplayInterval);

     return () => {
       clearInterval(intervalId);
     };
   }, []);

   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <div className="my-10">
          <h2 className="text-2xl font-bold font-serif text-center mt-10 mb-2">Gallery Section</h2>
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySection;
