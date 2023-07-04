import { Container, Form, Background, DoubleInput } from "./styles";
import { InputAd } from "../../components/InputAd";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { useAuth} from "../../hooks/auth";


export function CreateAdSecond(){

  const { user } = useAuth();
  
  if(!user){
    return(
      <h1>Sem autorização /:</h1>
    )
  }

  return(
    <Container>
      <Form>
        <h1>Quarto do Estudante</h1>


        <InputAd 
          label="Qual o título do seu anúncio?"
          placeholder="Digite aqui"
          type="text"
          
        />
        <InputAd 
          label="Seu contato?"
          placeholder="(00) 00000-0000"
          type="text"
          
        />
        <InputAd 
          label="Valor do aluguel"
          placeholder="00,00 R$"
          type="text"
          
        />
        <span>Descrição do seu anúncio</span>
        <TextArea  />

        

        
      </Form>

      <Background>
        <h1>Mais alguns detalhes...</h1>
        <Button title="Continuar" ></Button>
      </Background> 

    </Container>
  );
}