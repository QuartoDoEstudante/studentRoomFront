import { Container, Filters, Content } from  './styles'
import { Header } from "../../components/Header"
import { ButtonFilter } from "../../components/ButtonFilter"	
import { Card } from '../../components/Card'
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {  useNavigate } from "react-router-dom";


export function Home(){



  const [search, setSearch] = useState("0");
  const [property, setProperty] = useState("");

  const [type, setType] = useState(0);

  const updateSearch = (value) => {
    setSearch(value);
  };
  



  useEffect(() => {
    async function fetchProperty(){
      const response = await api.get(`/property/index?type=${type}&value=${search}`);
      setProperty(response.data)
    }
    fetchProperty()
  }, [search, type])

  const navigate = useNavigate();

  

  return(
    <Container>
      <Header  onUpdateSearch={updateSearch} />
      <Filters>
        <ButtonFilter title="Todos" onClick={() => setType(0) }/>
        <ButtonFilter title="Dividir apto" onClick={() => setType(1)} />
        <ButtonFilter title="Meus Anuncios" />
        <ButtonFilter title="Mais procurados" />
        <ButtonFilter title="Menor valor" />
        <ButtonFilter title="Maior valor" />
      </Filters>

      <Content>

        {property && property.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.value}
            description={item.description}
            id={item.id}
            onClick={() => navigate(`/property/${item.id}`)}
          />
        ))}

      </Content>

    </Container>
    
  )
}