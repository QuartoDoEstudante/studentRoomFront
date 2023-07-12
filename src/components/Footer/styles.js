import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #404040;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      color: white;
      width: 34px;
      height: 34px;
      cursor: pointer;
    }
  }

  p {
    color: white;
    font-size: 14px;
    font-weight: 400;
  }
`