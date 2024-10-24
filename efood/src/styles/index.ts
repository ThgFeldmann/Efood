import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  branco: '#FFF'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${cores.rosa};

    button {
      cursor: pointer;
    }
  }
`

export const Body = styled.div`
  background-color: ${cores.begeClaro};
  max-width: 100vw;
`
