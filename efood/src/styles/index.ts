import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2'
}

export const EstiloGlobal = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  color: ${cores.rosa};
`

export const Body = styled.div`
  background-color: ${cores.begeClaro};
`

export const Tag = styled.div`
  max-width: 121px;
  width: 100%;
  height: 26px;
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
`
