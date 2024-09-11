import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.li`
  max-width: 472px;
  width: 100%;
  border: 1px solid ${cores.rosa};
  color: ${cores.rosa};
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
`
