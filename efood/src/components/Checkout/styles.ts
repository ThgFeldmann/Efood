import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  h3 {
    color: ${cores.bege};
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.bege};
  }

  &.is-open {
    display: block;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    max-width: 344px;
    height: 24px;
    background-color: ${cores.bege};
    color: ${cores.rosa};
    border: none;
    padding: 4px;
    margin-bottom: 8px;

    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    text-align: center;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 8px;
    width: 100%;
  }

  input {
    color: #4b4b4b;
    background: ${cores.bege};
    border: none;
    outline: none;
    padding: 8px;
    max-height: 32px;
    height: 100%;
    margin-bottom: 8px;
    width: 100%;

    font-size: 14px;
    font-weight: bold;
    line-height; 16px;
  }
`

export const FormContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  .side-by-side {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    ${InputGroup} {
      max-width: 155px;
      width: 155px;
      max-height: 56px;
      height: 100%;
    }

    .more-width {
      ${InputGroup} {
        width: 228px;
      }

      label,
      input {
        width: 228px;
      }
    }

    .less-width {
      width: 88px;
    }
  }

  .margin-right {
    margin-right: 34px;
  }
`