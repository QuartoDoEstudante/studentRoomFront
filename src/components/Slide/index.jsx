import { Container } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import arrowLeftCarrosel from "../../assets/arrowLeftCarrosel.svg";
import arrowRightCarrosel from "../../assets/arrowRightCarrosel.svg";
import property  from "../../assets/property.png";
import property2  from "../../assets/property2.jpg";
import property3  from "../../assets/property3.jpg";


export function Slide(){
  
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



  const ImagesProperty = [{property}]


  return (
    <Container>
      <hr/>
      <Slider {...settings}>
        <img src={property} alt="imagem da propriedade" />
        <img src={property} alt="imagem da propriedade" />    
        <img src={property} alt="imagem da propriedade" />    

      </Slider>
    </Container>
  );
}