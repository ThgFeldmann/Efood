import styled from 'styled-components'

export const HeroContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 280px;
  display: block;
  text-align: center;
  line-height: 38px;

  .container {
    margin-left: 170px;
    height: 280px;
    position: relative;
  }

  img {
    filter: brightness(50%);
    position: absolute;
    width: 100%;
    left: 0;
    z-index: auto;
  }
`

export const Categoria = styled.p`
  max-width: 100px;
  width: 100%;
  height: 33px;
  font-weight: thin;
  font-size: 32px;
  color: #fff;
  margin-bottom: 180px;
  padding-top: 24px;
`

export const Restaurante = styled.h1`
  max-width: 338px;
  width: 100%;
  height: 33px;
  font-weight: bold;
  line-height: 38px;
  color: #fff;
`
