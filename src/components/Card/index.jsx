import { Container } from "./styles";
import  property  from "../../assets/property.png";
import  location  from "../../assets/location.svg";
import { Slide } from "../Slide";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export function Card({title, price, description, id}) {

  const router = `/property/${id}`

  const navigate = useNavigate();

  return(
    <Container>
      <Slide id={id} />
      <h1>{title}</h1>
      <div>
        <p>R$:{price}</p>
        <img src={location} alt="" /><span>Russas</span>
      </div>
      <p>{description}</p>
      <Button title="Detalhes" onClick={() => navigate(router)} />
    </Container>
  )
}