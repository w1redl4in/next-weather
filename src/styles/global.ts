import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }


  h1, h2, h3, h4, span, p {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  html {
    scroll-behavior: smooth;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; // font-size: 15px;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`;
