import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  align-items: center;
  gap: 9px;
  border-bottom: 1px solid #ccc;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  h1 {
    color: ${({theme}) => theme.COLORS.PRIMARY};
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  } 
  > button {
    width: 270px;
  }

  @media(max-width: 1250px){
    flex-direction: column;
    height: auto;
    padding: 0 20px;
    gap: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    h2 {
    font-size: 18px;
    font-weight: bold;
    color: black;
    }

    a {
    font-size: 14px;
    font-weight: 400;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const Search = styled.div`
  width: 400px;
`;