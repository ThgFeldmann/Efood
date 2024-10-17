import styled from 'styled-components'

export const HeroContainer = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 280px;
  display: block;
  text-align: center;
  line-height: 38px;

  .container {
    margin-left: 245px;
    height: 280px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 32px;
  }

  img {
    filter: brightness(50%);
    position: absolute;
    width: 100%;
    height: 280px;
    left: 0;
    z-index: auto;
  }
`

export const Categoria = styled.p`
  max-width: 100px;
  width: 100%;
  height: 33px;
  font-weight: 100;
  font-size: 32px;
  color: #fff;
`

export const Restaurante = styled.h1`
  max-width: 338px;
  width: 100%;
  height: 33px;
  font-weight: bold;
  line-height: 38px;
  color: #fff;
`
