import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  max-height: 398px;
  background-color: ${cores.branco};

  .restaurant {
    height: auto;
  }

  .containerImg {
    max-width: 472px;
    max-height: 217px;
    position: relative;
    }
  }

  .container {
    border: 1px solid ${cores.rosa};
    border-top: none;
    padding: 8px 0;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px 16px 8px;
  text-align: center;

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
  font-weight: normal;
  line-height: 22px;
  margin: 8px;
  margin-top: 0;
`

export const CardButton = styled.div`
  display: flex;
  max-width: 80px;
  height: 24px;
  margin: 0 auto 0 8px;
  background-color: ${cores.rosa};
  align-items: center;
  text-align: center;
  justify-content: center;

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
