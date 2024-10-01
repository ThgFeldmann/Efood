import { TagContainer } from './styles'

export type Props = {
  children: string
  size: 'small' | 'big'
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
