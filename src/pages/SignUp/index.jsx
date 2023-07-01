import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {  FiMail, FiLock, FiUser} from 'react-icons/fi';
export function SignUp(){

  return(
    <Container>
      <Background />
      <Form>
        <h1>Quarto do Estudante</h1>
        <p>Aplicação para encontrar sua moradias</p>

        <h2>Crie Sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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

        <Button title="Cadastrar" />

        <a href="#">
         Voltar para o login
        </a>
         
       
      </Form>

      

    </Container>
  );
}