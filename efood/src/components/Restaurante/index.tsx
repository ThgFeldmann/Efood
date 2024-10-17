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
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Restaurante = ({
  titulo,
  destacado = false,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <div className="containerImg">
      <Infos>
        {destacado === true ? <Tag size="big">Destaque da semana</Tag> : ''}
        <Tag size="small">{tipo}</Tag>
      </Infos>
      <img className="restaurant" src={capa} alt={titulo} />
    </div>
    <div className="container">
      <TitleContainer>
        <Titulo>{titulo}</Titulo>
        <Titulo>
          {avaliacao}
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>{descricao}</Descricao>
      <CardButton>
        <a href="/perfil">Saiba mais</a>
      </CardButton>
    </div>
  </Card>
)

export default Restaurante
