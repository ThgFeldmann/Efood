import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 26px;

  font-weight: bold;
  line-height: 14px;
  font-size: 12px;

  width: ${(props) => (props.size === 'big' ? '120px' : '60px')};
`
