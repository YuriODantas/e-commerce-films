import styled from 'styled-components'

export const MessageContainer = styled.div`
  height: calc(100vh - 170px);
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  overflow: hidden;

  > p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.palette['blue-700']};
    text-align: center;
  }

  > img {
    object-fit: cover;
  }
`

export const MessageButton = styled.button`
  width: 173px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette['blue-100']};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette['white-100']};
  cursor: pointer;
  text-decoration: none;
  transition: 100ms all ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette['blue-300']};
  }
`
