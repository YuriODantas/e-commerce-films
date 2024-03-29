import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from './routes'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet titleTemplate="%s | e-Films" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
