import { Card, Descricao, TitleContainer, Titulo } from './styles'
import sushi from '../../../assets/images/sushi.png'
import { Tag } from '../../../styles'
import estrela from '../../../assets/images/estrela.png'

const Listagem = () => (
  <div>
    <ul>
      <Card>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
        <img src={sushi} alt="Hioki Sushi" />
        <TitleContainer>
          <Titulo>Hioki Sushi</Titulo>
          <Titulo>4.9</Titulo>
        </TitleContainer>
        <Descricao>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </Descricao>
      </Card>
    </ul>
  </div>
)

export default Listagem
