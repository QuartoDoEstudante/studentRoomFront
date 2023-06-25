import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  width: auto;
  height: 38px;
  display: flex;
  

  > button {
    min-width: 45px;
    width: auto;
    height: auto;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY};
    border-radius: 20px;
    padding: 18px 20px 18px 20px;
    color: ${({theme}) => theme.COLORS.TEXT};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    :hover {
      background-color: ${({theme}) => theme.COLORS.GRAY};
    }
  }
`;