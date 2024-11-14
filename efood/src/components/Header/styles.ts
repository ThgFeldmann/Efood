import styled from 'styled-components'
import bannerImg from '../../assets/images/Vector.png'
import { breakpoints } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(${bannerImg});
  height: 160px;

  .container {
    max-width: 1024px;
    display: flex;
    padding: 39px 0;
    margin: 0 auto;
    align-items: center;
  }

  img {
    margin: 0 220px 0 340px;

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      margin: 0 80px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 110px;
      height: 70px;
      margin: 0 20px;
    }
  }
`

export const Link = styled.a`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin: 18px 0;
  text-align: center;

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    max-width: 320px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 112px;
    width: 100%;
  }
`

export const CartButton = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin: 18px 0;
  text-align: center;
  cursor: pointer;

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    max-width: 320px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 112px;
    width: 100%;
  }
`
