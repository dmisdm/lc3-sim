import { GlobalStyles } from "@mui/material";

export const globalStylesStuff = (
  <GlobalStyles
    styles={`
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-color: #242424;
}

#root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.87);

  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
`}
  />
);
