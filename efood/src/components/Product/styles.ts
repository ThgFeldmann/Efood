import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  max-width: 320px;
  width: 100%;
  height: 338px;
  padding: 8px;

  img {
    cursor: pointer;
    width: 304px;
    height: 167px;
  }
`

export const NomeProduto = styled.h4`
  width: 100%;
  height: 19px;
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  color: ${cores.bege};
  margin-top: 4px;
`

export const Descricao = styled.p`
  max-width: 304px;
  width: 100%;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.bege};
  margin: 8px 0;
`

export const Botao = styled.button`
  max-width: 304px;
  width: 100%;
  height: 24px;
  text-align: center;
  background-color: ${cores.bege};
  border: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`
