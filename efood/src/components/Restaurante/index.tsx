import { useNavigate } from 'react-router-dom'
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
import { Cardapio } from '../../App'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Restaurante = ({
  id,
  titulo,
  destacado = false,
  tipo,
  avaliacao,
  descricao,
  capa,
  cardapio
}: Props) => {
  const navigate = useNavigate()

  const toProfilePage = (
    cardapio: Cardapio[],
    id: number,
    capa: string,
    titulo: string,
    tipo: string
  ) => {
    navigate('/perfil', { state: { cardapio, id, capa, titulo, tipo } })
  }

  const handleClick = (
    id: number,
    capa: string,
    titulo: string,
    tipo: string
  ) => {
    toProfilePage(cardapio, id, capa, titulo, tipo)
  }

  return (
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
          <a
            onClick={() => {
              handleClick(id, capa, titulo, tipo)
            }}
          >
            Saiba mais
          </a>
        </CardButton>
      </div>
    </Card>
  )
}

export default Restaurante
