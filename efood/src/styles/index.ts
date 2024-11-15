import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  branco: '#FFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

  .container {
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Body = styled.div`
  background-color: ${cores.begeClaro};
  max-width: 100vw;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`
