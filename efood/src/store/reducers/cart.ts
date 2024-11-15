import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido, Restaurant } from '../../App'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  pedido: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pedido>) => {
      const order = state.pedido.find(
        (pedido) => pedido.id === action.payload.id
      )

      if (!order) {
        state.pedido.push({
          nome: action.payload.nome,
          preco: action.payload.preco,
          id: action.payload.id,
          foto: action.payload.foto
        })
      } else {
        alert('O produto já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.pedido = state.pedido.filter(
        (pedido) => pedido.id !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
