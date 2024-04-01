import { CartItemsType } from '../../../context/CartContext'
import { CartButtonRemove } from '../CartButtonRemove'
import { CartInfos } from '../CartInfos'
import { CartQuantitySelector } from '../CartQuantitySelector'
import { CartSubtotal } from '../CartSubtotal'
import { CartItemContainer } from './styles'

interface IProps {
  cart: CartItemsType
}
export function CartItem({ cart }: IProps) {
  return (
    <CartItemContainer>
      <CartInfos cart={cart} />
      <CartQuantitySelector cart={cart} />
      <CartSubtotal cart={cart} />
      <CartButtonRemove cart={cart} />
    </CartItemContainer>
  )
}
