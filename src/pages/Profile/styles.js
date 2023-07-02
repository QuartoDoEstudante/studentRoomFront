import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({theme}) => theme.COLORS.PRIMARY};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: white;
      font-size: 24px;
    }

    button {
      border: none;
      color: none;
      background: none;
    }
  }
`;

export const Form = styled.div`
  max-width: 340px;
  margin: 30px auto 0;
  > div:nth-child(4){
    margin-top: 24px;
  }
`;

export const Avatar = styled.form`
  position: relative;
  margin: -123px auto 32px;
  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 60%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: white;
    }
  }
`;