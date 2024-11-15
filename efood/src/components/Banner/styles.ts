import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 100vw;
  height: 360px;
  top: -24px;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;

  .container {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      margin-top: 60px;
    }
  }

  img {
    height: 57.5px;
    width: 125px;

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      height: 70px;
      width: 145px;
      margin-top: 20px;
    }
  }
`

export const Title = styled.h4`
  max-width: 539px;
  width: 100%;
  margin: 138px 0 40px;
  position: relative;
  font-size: 36px;
  font-weight: bolder;
  line-height: 42px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 68px 0 30px;
    font-size: 34px;
  }
`
