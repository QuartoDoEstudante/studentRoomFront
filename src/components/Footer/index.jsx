import { Container } from "./styles";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export function Footer(){
  return (
    <Container>
      <div>
        <AiFillInstagram/>
        <AiOutlineWhatsApp/>
      </div>
      <p>© Student Room todos os diretiros reservados 2023</p>
    </Container>
  );
}