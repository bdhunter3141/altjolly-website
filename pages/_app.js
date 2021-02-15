// imports
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.js'
import '../styles/globals.css'


// app definition
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
