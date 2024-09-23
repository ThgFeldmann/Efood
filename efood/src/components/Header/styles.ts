import styled from 'styled-components'
import bannerImg from '../../assets/images/Vector.png'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(${bannerImg});

  .container {
    max-width: 1024px;
    width: 100%;
    display: flex;
    padding: 39px 0;
    margin: 0 auto;
  }

  img {
    margin: 0 215px 0 345px;
  }
`

export const Link = styled.a`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin: 18px 0;
  text-align: center;
`

export const TextCart = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin: 18px 0;
  text-align: center;
  cursor: pointer;
`

// img {
//   margin: 0 193px 0 341px;
// }
