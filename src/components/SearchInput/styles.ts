import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    font-size: 1rem;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    padding: 16px;
    background-color: ${({ theme }) => theme.palette['white-100']};
    outline: none;
    height: 56px;
    flex: 1;

    &::placeholder {
      color: ${({ theme }) => theme.palette['gray-200']};
    }
    &:focus {
      outline-color: ${({ theme }) => theme.palette['blue-100']};
      outline-style: solid;
      outline-width: 2px;
    }
  }

  > button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette['white-100']};
    cursor: pointer;
    border: none;
    width: 50px;
    height: 100%;
    border-radius: 0 8px 8px 0;
  }
`
