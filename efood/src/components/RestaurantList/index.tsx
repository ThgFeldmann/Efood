import { Lista } from './styles'
import Restaurante from '../Restaurante'
import { Restaurant } from '../../App'

type Props = {
  restaurante: Restaurant[]
}

const Listagem = ({ restaurante }: Props) => (
  <Lista>
    {restaurante.map((restaurante) => (
      <Restaurante
        key={restaurante.id}
        id={restaurante.id}
        titulo={restaurante.titulo}
        destacado={restaurante.destacado}
        tipo={restaurante.tipo}
        avaliacao={restaurante.avaliacao}
        descricao={restaurante.descricao}
        capa={restaurante.capa}
      />
    ))}
  </Lista>
)

export default Listagem
