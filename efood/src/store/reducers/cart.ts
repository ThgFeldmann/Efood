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
      const pedido = state.pedido.find(
        (pedido) => pedido.id === action.payload.id
      )

      if (!pedido) {
        state.pedido.push(action.payload)
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
