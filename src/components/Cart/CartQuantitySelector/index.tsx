import { useContext } from 'react'

import { CartContext, CartItemsType } from '../../../context/CartContext'
import { CartQuantitySelectorContainer } from './styles'

interface IProps {
  cart: CartItemsType
}
export function CartQuantitySelector({ cart }: IProps) {
  const { updateQuantityInItemCart } = useContext(CartContext)

  const handleChangeQuantity = (quantity: number) => {
    updateQuantityInItemCart({
      id: cart.id,
      quantity,
    })
  }
  return (
    <CartQuantitySelectorContainer>
      <button onClick={() => handleChangeQuantity(cart.quantity - 1)}>
        <img src="/less-icon.svg" alt="less icon" />
      </button>
      <input
        type="number"
        value={cart.quantity}
        onChange={(e) => handleChangeQuantity(Number(e.target.value))}
      />
      <button onClick={() => handleChangeQuantity(cart.quantity + 1)}>
        <img src="/plus-icon.svg" alt="plus icon" />
      </button>
    </CartQuantitySelectorContainer>
  )
}
