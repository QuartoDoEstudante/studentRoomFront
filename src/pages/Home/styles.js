import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  
`;

export const Filters = styled.div`
  width: 100%;
  min-height: 45px;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  align-content: flex-start;
  
`;

export const Content = styled.div`
  margin-top: 45px;
  width: 100%;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

`;

