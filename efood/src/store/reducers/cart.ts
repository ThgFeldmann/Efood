import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido, Restaurant } from '../../App'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isCartOpen: boolean
  isDeliveryOpen: boolean
  isPaymentOpen: boolean
  isConfirmationOpen: boolean
}

const initialState: CartState = {
  items: [],
  pedido: [],
  isCartOpen: false,
  isDeliveryOpen: false,
  isPaymentOpen: false,
  isConfirmationOpen: false
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
    openCart: (state) => {
      state.isCartOpen = true
    },
    closeCart: (state) => {
      state.isCartOpen = false
    },
    openCheckout: (state) => {
      state.isCartOpen = false
      state.isDeliveryOpen = true
      state.isPaymentOpen = false
      state.isConfirmationOpen = false
    },
    toPayment: (state) => {
      state.isCartOpen = false
      state.isDeliveryOpen = false
      state.isPaymentOpen = true
      state.isConfirmationOpen = false
    },
    backToCart: (state) => {
      state.isCartOpen = true
      state.isDeliveryOpen = false
      state.isPaymentOpen = false
      state.isConfirmationOpen = false
    },
    closeAll: (state) => {
      state.isCartOpen = false
      state.isDeliveryOpen = false
      state.isPaymentOpen = false
      state.isConfirmationOpen = false
    },
    conclude: (state) => {
      state.isCartOpen = false
      state.isDeliveryOpen = false
      state.isPaymentOpen = false
      state.isConfirmationOpen = true
    },
    closeAfterConcluded: (state) => {
      state.isCartOpen = false
      state.isDeliveryOpen = false
      state.isPaymentOpen = false
      state.isConfirmationOpen = false
      state.pedido = []
    }
  }
})

export const {
  add,
  remove,
  openCart,
  closeCart,
  openCheckout,
  toPayment,
  backToCart,
  closeAll,
  conclude,
  closeAfterConcluded
} = cartSlice.actions
export default cartSlice.reducer
