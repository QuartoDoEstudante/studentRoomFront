import { Container, Label, RadioInputs } from "./styles";
import { useState } from "react";

export function RadioInput({ handleOptionChange  }){

  const [selectedOption, setSelectedOption] = useState('');

  const handleOption= (event) => {
    handleOptionChange(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Label>Qual o objetivo do seu anúncio?</Label>
      <div>
        <Label>
          <RadioInputs
            type="radio"
            name="anuncio"
            value="alugar-apto"
            checked={selectedOption === 'alugar-apto'}
            onChange={handleOption}
          />
          Alugar Apto
        </Label>
        <Label>
          <RadioInputs
            type="radio"
            name="anuncio"
            value="dividir-apto"
            checked={selectedOption === 'dividir-apto'}
            onChange={handleOption}
          />
          Dividir Apto
        </Label>
      </div>
    </Container>
  );
}