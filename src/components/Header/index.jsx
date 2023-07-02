import { Container, Profile, Search } from "./styles";
import { InputHome } from "../InputHome"
import { Button } from "../Button"


export function Header(){
  return(
    <Container>
      <h1>SudentRoom</h1>
      <Search>
        <InputHome placeholder="Pesquise por o Valor que está buscando.."/>
      </Search>

      <Button title="Anunciar" />

      {/* <Profile>
        <div>
          <h2>Lourival Junior</h2>
           Sair 
        </div>
        
        <img src="http://github.com/jrsantiaggo.png" alt="Imagem de perfil" />
        
        
      </Profile> */}

    </Container>
  )
 
}