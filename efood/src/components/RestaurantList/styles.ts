import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Lista = styled.ul`
  max-width: 60vw;
  margin: 80px auto 120px;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
