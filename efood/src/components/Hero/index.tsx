import { Categoria, HeroContainer, NomeRestaurante } from './styles'

type Props = {
  id: number
  titulo: string
  tipo: string
  capa: string
}

const Hero = ({ titulo, tipo, capa }: Props) => {
  return (
    <>
      <div>
        <HeroContainer>
          <img src={capa} alt={titulo} />
          <div className="container">
            <Categoria>{tipo}</Categoria>
            <NomeRestaurante>{titulo}</NomeRestaurante>
          </div>
        </HeroContainer>
      </div>
    </>
  )
}

export default Hero
