import { useContext, useMemo } from 'react'

import { CartContext } from '../context/CartContext'

export function useTotalQuantityItems() {
  const { cartItems } = useContext(CartContext)

  const total = useMemo(() => {
    return cartItems
      .map((item) => item.quantity)
      .reduce((prev, curr) => {
        return prev + curr
      }, 0)
  }, [cartItems])

  return total
}
