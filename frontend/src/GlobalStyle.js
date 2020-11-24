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
   
   --white-main: #ffffff;
   
  }
  
  html, body {
    margin: 0;
     font-size: 112.5%;
  }
  
`;
