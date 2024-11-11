import { Link } from 'react-router-dom'
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
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Restaurante = ({
  id,
  titulo,
  destacado = false,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
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
          <Link to={'/perfil'} state={{ id }}>
            Saiba mais
          </Link>
        </CardButton>
      </div>
    </Card>
  )
}

export default Restaurante
