import { useContext } from 'react'

import { CartContext, CartItemsType } from '../../../context/CartContext'
import { CartButtonRemoveContainer } from './styles'

interface IProps {
  cart: CartItemsType
}
export function CartButtonRemove({ cart }: IProps) {
  const { removeItemCart } = useContext(CartContext)
  return (
    <CartButtonRemoveContainer>
      <button onClick={() => removeItemCart(cart.id)}>
        <img src="/bin.svg" alt="bin icon" />
      </button>
    </CartButtonRemoveContainer>
  )
}
