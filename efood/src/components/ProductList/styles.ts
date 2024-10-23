import styled from 'styled-components'
import { cores } from '../../styles'

export const ListContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 56px 0 120px;
`

export const ListaProdutos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;

  &.visible {
    display: flex;
  }

  .prato {
    width: 280px;
    height: 280px;
  }

  .fechar {
    max-width: 16px;
    max-height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContainer = styled.div`
  background-color: ${cores.rosa};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  height: 344px;
  margin: 0 auto;

  position: relative;
  padding: 32px;
  z-index: 1;
  top: 10%;

  .container {
    max-width: 656px;
    height: 280px;
    margin-left: 24px;
  }
`

export const Title = styled.h4`
  color: ${cores.branco};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const Description = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;

  span {
    color: ${cores.branco};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  max-width: 218px;
  width: 100%;
  height: 24px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`
