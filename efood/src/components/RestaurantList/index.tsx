import { Lista } from './styles'
import Restaurante from '../Restaurante'
import { Restaurant } from '../../App'

type Props = {
  restaurante: Restaurant[]
}

const Listagem = ({ restaurante }: Props) => {
  return (
    <Lista>
      {restaurante.map((restaurante) => (
        <div key={restaurante.id}>
          <Restaurante
            id={restaurante.id}
            titulo={restaurante.titulo}
            destacado={restaurante.destacado}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            cardapio={{
              foto: '',
              preco: 0,
              id: 0,
              nome: '',
              descricao: '',
              porcao: ''
            }}
          />
        </div>
      ))}
    </Lista>
  )
}

export default Listagem
