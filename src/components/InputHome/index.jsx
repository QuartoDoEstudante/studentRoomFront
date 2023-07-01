import { Container, Circle } from "./styles";
import  search  from "../../assets/search.svg";


export function InputHome({...rest}){
  return(
    <Container>
      <Circle>
        <img src={search} alt="Ícone de pesquisa" />
      </Circle>
      <input {...rest} />
    </Container>
  )
}