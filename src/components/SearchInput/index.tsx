import { SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <input type="text" placeholder="Buscar filme pelo nome" />
      <button>
        <img src="/search-icon.svg" alt="search icon" />
      </button>
    </SearchInputContainer>
  )
}
