import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  
   --size-xs: 4px;
   --size-s: 8px;
   --size-m: 12px;
   --size-l: 16px;
   --size-xl: 24px;
   --size-xxl: 32px;
   --size-xxxl: 40px;
   
   --turquoise-main:#4c9ba6;
   --turquoise-bright:#e6f4f1;
   --turquoise-grey:#324b4f;
   --turquoise-green:#005e69;
   
   --white-main: #ffffff;
   
   --green:#2FAB63;
   --yellow:#EFD102;
   --blue:#0074B6;
   
  }
  
  html, body {
    margin: 0;
     font-size: 1rem;
     font-family: "Apple Braille", sans-serif;
     color: var(--turquoise-grey);
  }
  
  h1{
    font-family: "Satisfy", sans-serif;
    font-size: 220%;
    color: var(--white-main);

  }
  
  button{
    background-color: var(--turquoise-main);
    color: var(--white-main);
     border-radius: 5px;
    border: none;
  }
  
`;
