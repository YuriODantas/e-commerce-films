import { Helmet } from 'react-helmet-async'

import { SearchInput } from '../components/SearchInput'

export function Home() {
  return (
    <>
      <Helmet title="Products" />
      <SearchInput />
    </>
  )
}
