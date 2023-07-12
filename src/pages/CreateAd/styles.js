import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media(max-width: 1250px){
    flex-direction: column;
    height: auto;
    padding: 0 20px;
    gap: 20px;
    padding-top: 150px;
  }
`;

export const Uploads = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  
  padding: 25px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  > h1 {
    font-size: 34px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    margin-bottom: 10px;
    font-weight: 600;
  }
  @media(max-width: 1250px){
    margin-bottom: 30px;
    margin-top: -70px;
  }
    
`

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  text-align: center;
  button {
    border: none;
    color: none;
    background: none;
    position: absolute;
    top: 45px;
    left:55px;
  }
  svg {
      color:  ${({theme}) => theme.COLORS.PRIMARY};
      font-size: 24px;
    }
  > h1 {
    font-size: 38px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    position: absolute;
    top: 0;
    left: 55px;
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

  > label{
    font-weight: 600;
    margin-left: -445px;
    margin-bottom: -35px;
  }
  > textarea {
    width: 100%;
    height: 150px;

    background-color: transparent;

    color: black;
    border: 1px solid #ccc;
  
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
      color: #ccc;
    }

    
  }

  @media(max-width: 855px){
    > label{
    font-weight: 600;
    margin-left: 0;
    margin-bottom: -35px;
  }
  }
`;

export const DoubleInput = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
  margin-top: -10px;

  @media(max-width: 855px){
    flex-direction: column;
  }
`;

export const SaveAd = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 130px 0;
  max-width: 800px;

`;