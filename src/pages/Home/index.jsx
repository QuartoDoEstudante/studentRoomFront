import { Container, Filters, Content } from  './styles'
import { Header } from "../../components/Header"
import { ButtonFilter } from "../../components/ButtonFilter"	
import { Card } from '../../components/Card'


export function Home(){
  return(
    <Container>
      <Header />
      <Filters>
        <ButtonFilter title="Todos" />
        <ButtonFilter title="Dividir apto" />
        <ButtonFilter title="Perto de mim" />
        <ButtonFilter title="Kitnet" />
        <ButtonFilter title="2 quartos" />
        <ButtonFilter title="+ de dois quartos" />
        <ButtonFilter title="Mais procurados" />
        <ButtonFilter title="Menor valor" />
        <ButtonFilter title="Maior valor" />
      </Filters>

      <Content>
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
        <Card
          title="Kitnet 20x40"
          price="500,00"
          description="Bem localizada, perto da faculdade na esquina do espetinho do jacaré"
        />
      </Content>

    </Container>
    
  )
}