import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  max-height: 330px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  padding: 10px;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > img {
      margin-left: 215px;
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