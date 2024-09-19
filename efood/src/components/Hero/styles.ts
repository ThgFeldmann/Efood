import styled from 'styled-components'
import hero from '../../assets/images/hero.png'

export const Imagem = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 280px;
  background-image: url(${hero});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  text-align: center;
  line-height: 38px;

  .container {
    margin-left: 170px;
    height: 280px;
  }
`

export const Categoria = styled.p`
  max-width: 100px;
  width: 100%;
  height: 33px;
  font-weight: 100;
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

// problems: background-color not working
//   categoria font-weight not working?
