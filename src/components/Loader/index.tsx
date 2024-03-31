import { LoaderContainerStyle, SpinnerLoadingStyle } from './styles'

export function Loader() {
  return (
    <LoaderContainerStyle>
      <SpinnerLoadingStyle src="/loader-icon.png" alt="loader icon" />
    </LoaderContainerStyle>
  )
}
