import { Categoria, HeroContainer, NomeRestaurante } from './styles'

type Props = {
  titulo: string
  tipo: string
  capa: string
}

const Hero = ({ titulo, tipo, capa }: Props) => {
  return (
    <HeroContainer>
      <img src={capa} alt={titulo} />
      <div className="container">
        <Categoria>{tipo}</Categoria>
        <NomeRestaurante>{titulo}</NomeRestaurante>
      </div>
    </HeroContainer>
  )
}

export default Hero
