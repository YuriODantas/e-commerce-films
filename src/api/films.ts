import { api } from '../lib/api'

export type ResponseGetFilms = {
  id: number
  title: string
  price: number
  image: string
}

export const getFilms = async (search?: string | null) => {
  return await api.get<ResponseGetFilms[]>(
    search ? `/products?title=${search}` : '/products',
  )
}
