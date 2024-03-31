import { createContext, ReactNode, useState } from 'react'

import { ResponseGetFilms } from '../api/films'

interface CartItems extends ResponseGetFilms {
  quantity: number
}

type CartContextType = {
  cartItems: CartItems[]
  addNewItemInCart: (newItem: CartItems) => void
  updateQuantityInItemCart: (data: { quantity: number; id: number }) => void
  removeItemCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface IProps {
  children: ReactNode
}
export const CartProvider = ({ children }: IProps) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  const addNewItemInCart = (newItem: CartItems) => {
    setCartItems((state) => [...state, newItem])
  }

  const updateQuantityInItemCart = ({
    quantity,
    id,
  }: {
    quantity: number
    id: number
  }) => {
    if (quantity < 0) {
      return
    }
    setCartItems((state) =>
      state.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }

  const removeItemCart = (id: number) => {
    setCartItems((state) => state.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addNewItemInCart,
        updateQuantityInItemCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
