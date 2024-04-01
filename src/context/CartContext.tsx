import { createContext, ReactNode, useState } from 'react'

import { ResponseGetFilms } from '../api/films'

export interface CartItemsType extends ResponseGetFilms {
  quantity: number
}

type CartContextType = {
  cartItems: CartItemsType[]
  addNewItemInCart: (newItem: CartItemsType) => void
  updateQuantityInItemCart: (data: { quantity: number; id: number }) => void
  removeItemCart: (id: number) => void
  clearCart: () => void
  buySuccess: boolean
  changeBuySuccess: (value: boolean) => void
}

export const CartContext = createContext({} as CartContextType)

interface IProps {
  children: ReactNode
}
export const CartProvider = ({ children }: IProps) => {
  const [cartItems, setCartItems] = useState<CartItemsType[]>([])
  const [buySuccess, setBuySuccess] = useState(false)

  const addNewItemInCart = (newItem: CartItemsType) => {
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

  const changeBuySuccess = (value: boolean) => {
    setBuySuccess(value)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addNewItemInCart,
        updateQuantityInItemCart,
        removeItemCart,
        buySuccess,
        changeBuySuccess,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
