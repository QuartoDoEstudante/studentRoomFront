import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  
`;

export const Filters = styled.div`
  width: 100%;
  
  padding: 0 2%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: -32px;
  
`;

export const Content = styled.div`
  margin-top: 45px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  
  gap: 32px;

`;

