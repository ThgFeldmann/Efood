import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 360px;
  top: -24px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;

  img {
    margin-top: 40px;
    height: 57.5px;
    width: 125px;
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
`
