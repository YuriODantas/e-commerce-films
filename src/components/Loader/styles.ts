import styled, { keyframes } from 'styled-components'

export const LoaderContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const SpinnerLoadingStyle = styled.img`
  animation: ${spinnerAnimation} 800ms linear infinite;
`
