import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 944px;
  max-height: 398px;
  background-color: ${cores.branco};

  .restaurant {
    max-width: 100%;
    max-height: 217px;
    width: 100%;
  }

  .containerImg {
    max-width: 472px;
    max-height: 217px;
    position: relative;
  }

  .container {
    width: 472px;
    height: 181px;
    border: 1px solid ${cores.rosa};
    border-top: none;
    padding: 8px;

    position: relative;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 0 8px;

  img {
    margin-left: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
  display: flex;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 0;
  max-height: 88px;
  height: 100%;

  overflow: hidden;
`

export const CardButton = styled.div`
  display: flex;
  width: 80px;
  height: 24px;
  background-color: ${cores.rosa};
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  position: absolute;
  left: 8px;
  bottom: 8px;

  a {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
