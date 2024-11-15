import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .logo {
    max-width: 125px;
    width: 100%;
    height: 58px;
    margin-top: 40px;
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 140px;
      height: 62px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      height: 52px;
      width: 115px;
    }
  }
`

export const RedesContainer = styled.div`
  display: flex;
  gap: 8px;
  max-width: 88px;
  width: 100%;

  img {
    max-width: 24px;
    max-height: 24px;
    width: 100%;

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      max-width: 32px;
      max-height: 32px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 28px;
      max-height: 28px;
    }
  }

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    max-width: 120px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100px;
  }
`

export const Disclaimer = styled.p`
  max-width: 480px;
  width: 100%;
  height: 24px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  position: absolute;
  bottom: 40px;

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    font-size: 14px;
    line-height: 24px;
    height: 50px;
    bottom: 70px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    bottom: 90px;
    max-width: 95%;
    font-size: 14px;
    line-height: 22px;
  }
`
