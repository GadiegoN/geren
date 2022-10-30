import { createGlobalStyle } from 'styled-components'

export const GloabalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #285E61;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
`