import { priceFormatter } from '../../../utils/formatter'
import { CartUniquePriceItemContainer } from './styles'

interface IProps {
  price: number
}
export function CartUniquePriceItem({ price }: IProps) {
  return (
    <CartUniquePriceItemContainer>
      {priceFormatter.format(price)}
    </CartUniquePriceItemContainer>
  )
}
