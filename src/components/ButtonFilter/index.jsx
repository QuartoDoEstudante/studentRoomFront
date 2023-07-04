import { Container } from './styles';

export function ButtonFilter({title, ...rest}){
  
  return (
    <Container >
      
      <button {...rest}>{title}</button>
    </Container>
  )
}