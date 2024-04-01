import { HeaderCart } from '../HeaderCart'
import { HeaderStyleContainer, HeaderStyleLogo } from './styles'

export function Header() {
  return (
    <HeaderStyleContainer>
      <HeaderStyleLogo>WeMovies</HeaderStyleLogo>
      <HeaderCart />
    </HeaderStyleContainer>
  )
}
