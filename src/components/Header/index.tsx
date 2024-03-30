import { Cart } from '../Cart'
import { HeaderStyleContainer, HeaderStyleLogo } from './styles'

export function Header() {
  return (
    <HeaderStyleContainer>
      <HeaderStyleLogo>WeMovies</HeaderStyleLogo>
      <Cart />
    </HeaderStyleContainer>
  )
}
