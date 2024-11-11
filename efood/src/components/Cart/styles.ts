import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  width: 360px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px 8px 0;
  align-items: center;
  justify-content: center;
  background-color: ${cores.rosa};
  color: ${cores.rosa};
`

export const Item = styled.li`
  background-color: ${cores.bege};
  width: 344px;
  height: 100px;
  padding: 8px 8px 12px;
  display: flex;
  margin-top: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const Lixeira = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  max-width: 16px;
  max-height: 16px;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: ${cores.bege};
  border: none;
  width: 100%;
  height: 24px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;

  p {
    color: ${cores.bege};
  }

  span {
    color: ${cores.bege};
  }
`
