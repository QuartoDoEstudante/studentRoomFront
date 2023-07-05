import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  color: white;
  border-radius: 10px;
  border: none;

  &disabled{
    opacity: 0.5;
  }
  > svg {
    margin-right: 10px;
  }
`;