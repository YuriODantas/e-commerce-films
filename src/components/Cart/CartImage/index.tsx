import { CartImageStyle } from './styles'

interface IProps {
  image: string
}
export function CartImage({ image }: IProps) {
  return <CartImageStyle src={image} alt="" />
}
