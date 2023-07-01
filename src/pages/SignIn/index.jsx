import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {  FiMail, FiLock} from 'react-icons/fi';


export function SignIn(){


  return(
    <Container>
      <Form>
        <h1>Quarto do Estudante</h1>
        <p>Aplicação para encontrar sua moradia</p>

        <h2>Faça seu login</h2>
        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a href="#">
          Criar Conta
        </a>
        
       
        
      </Form>

      <Background />

    </Container>
  );
}