import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;

  img: first-children {
    margin-top: 40px;
    margin-bottom: 32.5px;
  }
`

export const RedesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-bottom: 80px;
  }
`

export const Disclaimer = styled.p``
