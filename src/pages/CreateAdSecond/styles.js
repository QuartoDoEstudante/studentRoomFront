import styled from "styled-components";
import backgroundimg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  min-width: 900px;
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  text-align: center;

  > h1 {
    font-size: 38px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    position: absolute;
    top: 0;
    left: 0;
    margin: 32px 0 0 32px;
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.TEXT};
  }
  > a {
    margin-top: 124px;
    color: ${({theme}) => theme.COLORS.BLACK};
    font-weight: 600;
  }
  > span {
    font-weight: 600;
    margin: 0 0 -35px -440px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  
  > h1 {
    font-size: 38px;
    color: white;
    position: absolute;
    top: 450px;
    font-weight: 500;
  }

  > button {
    background: transparent;
    border: 1px solid white;
    color: white;
    margin-bottom: 40px;
    max-width: 350px;
  }
`;

export const DoubleInput = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
`;