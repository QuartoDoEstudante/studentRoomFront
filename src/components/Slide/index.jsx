import { Container } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import arrowLeftCarrosel from "../../assets/arrowLeftCarrosel.svg";
import arrowRightCarrosel from "../../assets/arrowRightCarrosel.svg";
import property  from "../../assets/property.png";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function Slide({id}){

 
  const [propertyImages, setPropertyImages] = useState([]);

  async function fetchPropertyImages() {
    try {
      const response = await api.get(`/property/show/${id}`);
      const photos = response.data.photos;
  
      const urls = photos.map((photo) => {
        return `${api.defaults.baseURL}/files/${photo.photo}`;
      });
  
      setPropertyImages(urls);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPropertyImages();
  }, []);
  
  
  
 
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: <img src={arrowLeftCarrosel} alt="arrowLeftCarrosel" />,
    nextArrow: <img src={arrowRightCarrosel} alt="arrowRightCarrosel" />
  };


  return (
    <Container>
      <hr />
      <Slider {...settings}>
        {propertyImages.map((url, index) => (
          <img key={index} src={url} alt={`Property Image ${index}`} />
        ))}
      </Slider>
    </Container>
  );
  
}