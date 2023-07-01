import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({theme}) => theme.COLORS.TEXT};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    padding: 12px 12px 12px 48px;
    color: ${({theme}) => theme.COLORS.TEXT};
    background: transparent;
    border: 2px solid ${({theme}) => theme.COLORS.SECONDARY};
    border-radius: 25px;

    &:placeholder {
      color: ${({theme}) => theme.COLORS.TEXT};
    }

  } 

  
`;

export const Circle  = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  margin-right: -45px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;