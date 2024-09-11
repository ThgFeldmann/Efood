import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  width: 100%;
  height: 360px;
  top: -24px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;

  img {
    margin-top: 40px;
    height: 57.5;
    width: 125px;
  }
`

export const Title = styled.h4`
  max-width: 539px;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${cores.rosa};
`
