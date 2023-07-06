import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  padding: 10px;
  margin-bottom: 120px;
  

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > img {
      margin-left: 315px;
      margin-top: -3px;
    }
  }

  > h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.BLACK};
  }

  > div > span {
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.GRAY_TEXT};
  }
  
  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;

  }

`;