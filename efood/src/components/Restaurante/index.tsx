import {
  Card,
  CardButton,
  Descricao,
  Infos,
  TitleContainer,
  Titulo
} from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  name: string
  score: number
  description: string
  info: string
  highlited: boolean
  image: string
}

const Restaurante = ({
  name,
  score,
  description,
  info,
  image,
  highlited = false
}: Props) => (
  <Card>
    <div className="containerImg">
      <Infos>
        {highlited === true ? <Tag size="big">Destaque da semana</Tag> : ''}
        <Tag size="small">{info}</Tag>
      </Infos>
      <img className="restaurant" src={image} alt={name} />
    </div>
    <div className="container">
      <TitleContainer>
        <Titulo>{name}</Titulo>
        <Titulo>
          {score}
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>{description}</Descricao>
      <CardButton>
        <a href="/perfil">Saiba mais</a>
      </CardButton>
    </div>
  </Card>
)

export default Restaurante
