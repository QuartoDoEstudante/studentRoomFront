import { Container, Form, Background, DoubleInput } from "./styles";
import { InputAd } from "../../components/InputAd";
import { Button } from "../../components/Button";
import {  FiMail, FiLock} from 'react-icons/fi';


export function CreateAdFirst(){


  return(
    <Container>
      <Form>
        <h1>Quarto do Estudante</h1>

        <DoubleInput>

          <InputAd 
            label="CEP"
            placeholder="Somente Números"
            type="text"
          />
          <InputAd 
            label="Logradouro"
            placeholder="Digite aqui"
            type="text"
          />
        </DoubleInput>
        <DoubleInput>

          <InputAd 
            label="Número"
            placeholder="Digite aqui"
            type="text"
          />
          <InputAd 
            label="Complemento"
            placeholder="Digite aqui"
            type="text"
          />
        </DoubleInput>

        <InputAd 
          label="Ponto de referência"
          placeholder="E-Digite aqui"
          type="email"
          
        />
        <InputAd 
          label="Bairro"
          placeholder="E-Digite aqui"
          type="email"
          
        />
        <DoubleInput>

          <InputAd 
            label="Cidade"
            placeholder="Digite aqui"
            type="text"
          />
          <InputAd 
            label="UF"
            placeholder="Digite aqui"
            type="text"
          />
        </DoubleInput>



       
        
       
        
      </Form>

      <Background>
        <h1>Onde se localiza?</h1>
        <Button title="Continuar" ></Button>
      </Background> 

    </Container>
  );
}