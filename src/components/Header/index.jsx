import { Container, Profile, Search } from "./styles";
import { InputHome } from "../InputHome"
import { Button } from "../Button"
import { useAuth } from "../../hooks/auth"
import {  useNavigate, Link } from "react-router-dom";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";
import { api } from '../../services/api';
import { useState } from "react";

export function Header({onUpdateSearch}){


  

  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    onUpdateSearch(value);
  };

  function handleCreateProperty(){
    user ? navigate("/createAd") : navigate("/login");
  }



  const avatarUrl = user && user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
 

  return(
    <Container>
      <h1>Apartamento do Estudante</h1>
      <Search>
        <InputHome placeholder="Pesquise por o Valor que está buscando.." 
          onChange={handleSearchChange} 
        />
      </Search>

      <Button title="Anunciar" onClick={handleCreateProperty} />

    

      {user && (
        <Profile >
          <div>
            <h2>{user.first_name + " " + user.last_name}</h2>
            <span onClick={() => signOut()}>Sair</span>
          </div>
          <Link to="/profile" >
            <img src={avatarUrl} alt="" />
          </Link>
          
        </Profile>
      )}

    </Container>
  )
 
}