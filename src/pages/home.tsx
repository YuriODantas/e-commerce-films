import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { getFilms } from '../api/films'
import { CardFilm } from '../components/CardFilm'
import { Loader } from '../components/Loader'
import { SearchInput } from '../components/SearchInput'
import { WrapperCards } from '../components/WrapperCards'

export function Home() {
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
      {isFetching && <Loader />}
      {!isFetching && (
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
