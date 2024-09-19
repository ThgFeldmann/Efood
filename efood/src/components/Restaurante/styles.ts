import styled from 'styled-components'
import { cores, Tag } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  max-height: 398px;
  height: 100%;
  border: 1px solid ${cores.rosa};
  background-color: ${cores.branco};
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  margin-bottom: 16px;
  text-align: center;

  img {
    margin-left: 8px;
  }
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  margin: 16px 16px 0 283px;

  div {
    width: 100%;
    height: 26px;
    font-size: 12px;
    font-weight: bold;
  }
`

export const TagDestaque = styled(Tag)`
  margin-right: 8px;
  max-width: 120px;
  width: 100%;
`

export const TagCategoria = styled(Tag)`
  max-width: 60px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  margin: 8px;
  margin-top: 0;
`

export const CardButton = styled(Tag)`
  max-width: 80px;
  width: 100%;
  height: 24px;
  margin: 8px;
  margin-right: auto;

  a {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
  }
`
