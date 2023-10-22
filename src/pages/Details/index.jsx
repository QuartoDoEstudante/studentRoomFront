import { Container, Content, SummaryFirst, SummarySecond, ContainerSlider } from "./styles";
import { Slide } from "../../components/Slide";
import { Button } from "../../components/Button";
import location from "../../assets/location.svg";
import copy from "../../assets/copy.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Details() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const id = window.location.pathname.split("/")[2];
  const [property, setProperty] = useState({});

  async function fetchProperty() {
    try {
      const response = await api.get(`/property/show/${id}`);
      const property = response.data.property;
      setProperty(property);
    } catch (error) {
      return;
    }
  }

  function copyToClipboard() {
    const textField = document.createElement('textarea');
    textField.value = currentUrl;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);
    alert('URL copiada para a área de transferência');
  }

  useEffect(() => {
    fetchProperty();
  }, []);

  async function handleDelete() {
    try {
      await api.delete(`/property/delete/${id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  const currentUrl = window.location.href; 

  return (
    <Container>
      <div>
        <h1>Quarto do Estudante</h1>
      </div>

      <Content>
        <SummaryFirst>
          <h2>{property.title}</h2>
          <div></div>
          <ContainerSlider>
            <Slide id={id} />
          </ContainerSlider>
        </SummaryFirst>

        <SummarySecond>
          {user && user.id === property.owner && (
            <Button title="Excluir anúncio" onClick={() => handleDelete()} />
          )}

          <Button title="Voltar" onClick={() => navigate("/")}/>

          <p>{property.value}<span> R$</span></p>
          <div>
            <img src={location} alt="" /> <span>Russas</span>
          </div>

          <h2>Descrição</h2>
          <p>{property.description}</p>

          <h2>Contato</h2>
          <p>{property.contact}</p>

          <h2>Compartilhar</h2>
          <p>{currentUrl} <img src={copy} width="28px" alt="copiar" onClick={copyToClipboard} style={{ cursor: 'pointer' }}/></p> 
        </SummarySecond>
      </Content>
    </Container>
  );
}
