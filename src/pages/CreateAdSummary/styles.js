import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  &:first-of-type {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
    h1 {
      font-size: 34px;
      margin: 30px 0 0 25px;
      color: ${({theme}) => theme.COLORS.PRIMARY};
    }
  }
`;


export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 57px auto;
  width: 100%;
  align-items: center;
  padding: 0 2%;
  height: auto;
  max-width: 1400px;
`;

export const SummaryFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
  width: 850px;
  h2 {
    color: black;
    font-weight: 600;
    font-size: 36px;
  }
  > div {
    display: flex;
    gap: 15px;
    p {
      margin-left: 10px;
    }
  }
`;

export const ContainerSlider = styled.div`
  width: 750px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
  }

  
`;

export const SummarySecond = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  > button:first-of-type {
    background: ${({theme}) => theme.COLORS.RED_BUTTON};
  }

  p:first-of-type {
    font-weight: 600;
  }
  
`;