import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 855px){
    flex-direction: column;
  }
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const RadioInputs = styled.input`
  margin-right: 5px;
`;