import { useContext, useMemo } from 'react'

import { CartContext } from '../context/CartContext'

export function useTotalPriceCart() {
  const { cartItems } = useContext(CartContext)

  const total = useMemo(() => {
    return cartItems
      .map((item) => item.quantity * item.price)
      .reduce((prev, curr) => {
        return prev + curr
      }, 0)
  }, [cartItems])

  return total
}
