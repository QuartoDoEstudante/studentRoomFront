import { Container } from "./styles";

export function InputAd({icon: Icon, label, ...rest}){
  return(
    <Container>
      <label htmlFor={label}>{label}</label>
      <input {...rest} />
    </Container>
  )
}