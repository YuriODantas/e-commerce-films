import { CartItemsType } from '../../../context/CartContext'
import { CartButtonRemove } from '../CartButtonRemove'
import { CartImage } from '../CartImage'
import { CartInfos } from '../CartInfos'
import { CartQuantitySelector } from '../CartQuantitySelector'
import { CartSubtotal } from '../CartSubtotal'
import { CartUniquePriceItem } from '../CartUniquePriceItem'
import {
  CartItemMobileContainer,
  CartWrapperBottom,
  CartWrapperTop,
} from './styles'

interface IProps {
  cart: CartItemsType
}
export function CartItemMobile({ cart }: IProps) {
  return (
    <CartItemMobileContainer>
      <CartImage image={cart.image} />
      <div>
        <CartWrapperTop>
          <CartInfos cart={cart} />
          <div>
            <CartUniquePriceItem price={cart.price} />
            <CartButtonRemove cart={cart} />
          </div>
        </CartWrapperTop>
        <CartWrapperBottom>
          <CartQuantitySelector cart={cart} />
          <CartSubtotal cart={cart} />
        </CartWrapperBottom>
      </div>
    </CartItemMobileContainer>
  )
}
