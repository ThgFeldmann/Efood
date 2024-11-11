import styled from 'styled-components'
import bannerImg from '../../assets/images/Vector.png'

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
  }

  img {
    margin: 0 220px 0 340px;
  }
`

export const Link = styled.a`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin: 18px 0;
  text-align: center;
`

export const CartButton = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin: 18px 0;
  text-align: center;
  cursor: pointer;
`
