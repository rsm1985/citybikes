import { createRoot } from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Main from './components/Main'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'
import { GlobalStyle } from './assets/styles/global-styles'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </Provider>,
)
