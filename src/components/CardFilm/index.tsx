import { useContext } from 'react'

import { ResponseGetFilms } from '../../api/films'
import { CartContext } from '../../context/CartContext'
import { priceFormatter } from '../../utils/formatter'
import {
  CardFilmButton,
  CardFilmContainer,
  CardFilmPrice,
  CardFilmTitle,
} from './styles'

interface IProps {
  card: ResponseGetFilms
}

export function CardFilm({ card }: IProps) {
  const { cartItems, addNewItemInCart, updateQuantityInItemCart } =
    useContext(CartContext)
  const quantity = cartItems.find((item) => item.id === card.id)?.quantity || 0
  const activeButton: boolean = quantity > 0

  const handleClick = () => {
    if (cartItems.some((item) => item.id === card.id)) {
      updateQuantityInItemCart({ id: card.id, quantity: quantity + 1 })
      return
    }
    addNewItemInCart({ ...card, quantity: 1 })
  }

  return (
    <CardFilmContainer>
      <img src={card.image} alt="" />
      <CardFilmTitle>{card.title}</CardFilmTitle>
      <CardFilmPrice>{priceFormatter.format(card.price)}</CardFilmPrice>
      <CardFilmButton isActive={activeButton} onClick={() => handleClick()}>
        <img src="/cart-button-icon.svg" alt="card button icon" />
        <span>{quantity}</span>
        <p>Adicionar ao carrinho</p>
      </CardFilmButton>
    </CardFilmContainer>
  )
}
