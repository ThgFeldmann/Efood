import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../App'

type Response = {
  orderId: string
}

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      city: string
      description: string
      number: number
      zipCode: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      cardNumber: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<Response, PurchasePayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantQuery, usePurchaseMutation } = api

export default api
