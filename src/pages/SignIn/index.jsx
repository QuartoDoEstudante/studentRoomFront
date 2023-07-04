import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {  FiMail, FiLock} from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useAuth} from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function SignIn(){

  const navigate = useNavigate();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn(){

    if(!email || !password){
      return alert("Preencha todos os campos!")
    }

    signIn({email, password});
    if(user){
      navigate("/");
    }
    
  }


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
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          Criar Conta
        </Link>
        
       
        
      </Form>

      <Background />

    </Container>
  );
}