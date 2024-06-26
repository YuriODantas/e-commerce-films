import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Open-sans', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.palette['gray-300']};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`
