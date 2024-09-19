import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  max-width: 320px;
  width: 100%;
  height: 338px;
`

export const NomeProduto = styled.h4`
  max-width: 124px;
  width: 100%;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
`

export const Descricao = styled.p`
  max-width: 304px;
  width: 100%;
  height: 88px;
  font-size: 14px;
  font-weight: regular;
  line-height: 22px;
`

export const Botao = styled.button`
  max-width: 304px;
  width: 100%;
  height: 24px;
  text-align: center;
`
