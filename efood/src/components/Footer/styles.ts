import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    max-width: 125px;
    width: 100%;
    height: 58px;
    margin-top: 40px;
    margin-bottom: 32px;
  }
`

export const RedesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
  max-width: 88px;
  width: 100%;
  height: 24px;

  img {
    max-width: 24px;
    width: 100%;
    height: 24px;
  }
`

export const Disclaimer = styled.p`
  max-width: 480px;
  width: 100%;
  height: 24px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
