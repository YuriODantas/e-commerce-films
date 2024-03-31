import { ResponseGetFilms } from '../../api/films'
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
  const quantity = 0
  const activeButton: boolean = quantity > 0
  return (
    <CardFilmContainer>
      <img src={card.image} alt="" />
      <CardFilmTitle>{card.title}</CardFilmTitle>
      <CardFilmPrice>
        {card.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </CardFilmPrice>
      <CardFilmButton isActive={activeButton}>
        <img src="/cart-button-icon.svg" alt="card button icon" />
        <span>{quantity}</span>
        <p>Adicionar ao carrinho</p>
      </CardFilmButton>
    </CardFilmContainer>
  )
}
