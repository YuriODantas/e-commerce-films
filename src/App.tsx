import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartProvider } from './context/CartContext'
import { queryClient } from './lib/react-query'
import { router } from './routes'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet titleTemplate="%s | e-Films" />
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}
