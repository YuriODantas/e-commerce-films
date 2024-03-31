import styled from 'styled-components'

export const CardFilmContainer = styled.div`
  width: 100%;
  height: 324px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette['white-100']};

  > img {
    width: 147px;
  }
`

export const CardFilmTitle = styled.p`
  color: ${({ theme }) => theme.palette['gray-700']};
  font-size: 0.75rem;
  font-weight: 700;
`

export const CardFilmPrice = styled.span`
  color: ${({ theme }) => theme.palette['blue-700']};
  font-size: 1rem;
  font-weight: 700;
`

export const CardFilmButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme, isActive }) =>
    theme.palette[isActive ? 'green-300' : 'blue-100']};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette['white-100']};
  text-transform: uppercase;
  cursor: pointer;
  transition: 100ms all ease-in-out;

  &:hover {
    background-color: ${({ theme, isActive }) =>
      theme.palette[isActive ? 'green-500' : 'blue-300']};
  }

  > span {
    margin-left: 3.4px;
    margin-right: 12px;
    font-weight: 400;
  }
`
