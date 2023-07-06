import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  
  hr {
    opacity: 0;
    height: 1px;
  }

  .slick-dots {
    bottom: 10px;
  } 

  .slick-dots button {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    width: 5px;
    height: 5px;
  }

  .slick-dots button:focus {
    outline: none;
  }
  .slick-dots button::before {
    content: "";
  }
  .slick-dots li.slick-active button {
    background-color: white;
  } 

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
  .slick-prev {
    left: 8px; 
  }

  .slick-next {
    right: 8px; 
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }  

  .slick-slide img {
    width: 100%; 
    height: 420px; 
    object-fit: cover;
    border-radius: 8px;

  }
  
`
