import { Container, Content, SummaryFirst, SummarySecond, ContainerSlider } from "./styles";
import { Slide } from "../../components/Slide";
import { Button } from "../../components/Button";
import location from "../../assets/location.svg";
import { useAuth} from "../../hooks/auth";

export function CreateAdSummary() {

  const { user } = useAuth();
  
  if(!user){
    return(
      <h1>Sem autorização /:</h1>
    )
  }
  return (
    <Container>
      <div>
        <h1>Quarto do Estudante</h1>
      </div>

      <Content>
      <SummaryFirst>
        <h2>KITNET 20 x 40,</h2>
        <div>
          <p>600m de distância</p>
          <p>Perto da ufc</p>
          <p>Próximo a ufc</p>
        </div>
        <ContainerSlider>
          <Slide />
        </ContainerSlider>
        
        
      </SummaryFirst>

      <SummarySecond>
        <Button title="Finalizar" />
        <Button title="Revisar" />

        <p>400,00 R$</p>
        <div>
          <img src={location} alt="" /> <span>Russas</span>
        </div>

        <h2>Descrição</h2>
        <p>Bem localizado, perto da faculdade na esquina do jacaré do espetinho</p>

        <h2>Contato</h2>
        <p>(78) 99456 7764</p>


      </SummarySecond>
      </Content>

      

    </Container>

  )
}