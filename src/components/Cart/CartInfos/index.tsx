import { CartItemsType } from '../../../context/CartContext'
import { CartImage } from '../CartImage'
import { CartUniquePriceItem } from '../CartUniquePriceItem'
import { CartInfosContainer } from './styles'

interface IProps {
  cart: CartItemsType
}
export function CartInfos({ cart }: IProps) {
  return (
    <CartInfosContainer>
      <CartImage image={cart.image} />
      <div>
        <p>{cart.title}</p>
        <CartUniquePriceItem price={cart.price} />
      </div>
    </CartInfosContainer>
  )
}
