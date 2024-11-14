import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ListContainer = styled.div`
  max-width: 1024px;
  margin: 56px auto 120px;

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    max-width: 768px;
  }
`

export const ListaProdutos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 1024px;

  li {
    max-width: 768px;
  }

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    max-width: 768px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 280px;
      height: 210px;
    }
  }

  .fechar {
    max-width: 16px;
    max-height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
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

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      margin: 24px 0 0;
      height: 246px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 18px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    max-width: 650px;
    height: 600px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 570px;
  }
`

export const Title = styled.h4`
  color: ${cores.branco};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
  }
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

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
      font-size: 20px;
    }
  }

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
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

  @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
    max-width: 300px;
    height: 32px;
    font-size: 20px;
  }
`
