import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {  FiMail, FiLock, FiUser} from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp(){

  
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  function handleSingUp(){
    if(!first_name || !last_name || !email || !password || !contact || !cpf){
      return alert("Preencha todos os campos!")
    }

    api.post("/users/create", {first_name, last_name, email, password, contact, cpf})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível realizar o cadastro");
      }
    })
  }

  return(
    <Container>
      <Background />
      <Form>
        <h1>Quarto do Estudante</h1>
        <p>Aplicação para encontrar sua moradias</p>

        <h2>Crie Sua conta</h2>

        <Input 
          placeholder="Primeiro Nome"
          type="text"
          icon={FiUser}
          onChange={ e => setFirstName(e.target.value)}
        />
        <Input 
          placeholder="Ultimo Nome"
          type="text"
          icon={FiUser}
          onChange={ e => setLastName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={ e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={ e => setPassword(e.target.value)}
        />

        <Input 
          placeholder="Contato"
          type="text"
          icon={FiUser}
          onChange={ e => setContact(e.target.value)}
          onKeyPress={e => {
            if(!/[0-9]/.test(e.key)){
              e.preventDefault();
            }
          }}
        />

        <Input 
          placeholder="CPF"
          type="text"
          icon={FiUser}
          onChange={ e => setCpf(e.target.value)}
          onKeyPress={e => {
            if(!/[0-9]/.test(e.key)){
              e.preventDefault();
            }
          }}
        />

        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/login">
          Voltar para o login
        </Link>
         
       
      </Form>

      

    </Container>
  );
}