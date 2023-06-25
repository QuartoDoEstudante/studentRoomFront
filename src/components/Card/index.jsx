import { Container } from "./styles";
import  property  from "../../assets/property.png";
import  location  from "../../assets/location.svg";
import { Slide } from "../Slide";

export function Card({title, price, description}) {
  return(
    <Container>
      <Slide>
      
      </Slide>
      <h1>{title}</h1>
      <div>
        <p>R$:{price}</p>
        <img src={location} alt="" /><span>Russas</span>
      </div>
      <p>{description}</p>
    </Container>
  )
}