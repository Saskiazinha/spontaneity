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
   
   --white-main: #ffffff;
   
   //#F9F871 yellow
   //#2FAB63 green
   //#0074B6 blue
   
  }
  
  html, body {
    margin: 0;
     font-size: 112.5%;
     font-family: Arial, sans-serif;
     color: var(--turquoise-grey);
  }
  
`;
