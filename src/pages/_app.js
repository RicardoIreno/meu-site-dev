import { ThemeProvider } from 'styled-components'
import '../styles/fonts.css'
import theme from '../styles/theme.ts'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
  
}

export default MyApp
