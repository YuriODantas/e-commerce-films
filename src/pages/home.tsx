import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { getFilms } from '../api/films'
import { CardFilm } from '../components/CardFilm'
import { CartContainer } from '../components/Container'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { SearchInput } from '../components/SearchInput'
import { WrapperCards } from '../components/WrapperCards'
import { CartContext } from '../context/CartContext'

export function Home() {
  const { buySuccess, changeBuySuccess } = useContext(CartContext)
  const queryName = 'search-query'
  const [searchParams, setSearchParams] = useSearchParams()
  const findFilm = searchParams.get(queryName)

  const { data: listFilms, isFetching } = useQuery({
    queryKey: ['list', findFilm],
    queryFn: () => getFilms(findFilm),
  })

  function handleSearch(query: string) {
    setSearchParams((state) => {
      if (query.length === 0) {
        state.delete(queryName)
      } else {
        state.set(queryName, query)
      }
      return state
    })
  }

  return (
    <>
      <Helmet title="Products" />
      {buySuccess && (
        <CartContainer>
          <Message
            text="Compra realizada com sucesso!"
            image="/buy-success.svg"
            buttonName="VOLTAR"
            handleClick={() => changeBuySuccess(false)}
          />
        </CartContainer>
      )}
      {!buySuccess && isFetching && <Loader />}
      {!buySuccess && !isFetching && (
        <>
          <SearchInput
            handleSearch={handleSearch}
            valueSearch={findFilm === null ? '' : findFilm}
          />
          <WrapperCards>
            {listFilms?.data.map((film) => {
              return <CardFilm key={film.id} card={film} />
            })}
          </WrapperCards>
        </>
      )}
    </>
  )
}
