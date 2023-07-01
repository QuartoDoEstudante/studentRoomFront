import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({theme}) => theme.COLORS.WHITE};

  margin-bottom: 8px;
  border-radius: 10px;

  > label {
    margin-top: -90px;
    font-weight: 600;
    position: absolute;
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: black;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 10px;
    &:placeholder {
      color: ${({theme}) => theme.COLORS.WHITE};
    }

  } 
`;