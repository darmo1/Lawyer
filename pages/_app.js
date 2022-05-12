import { TYTProvider } from '../src/context/transitoTransporte'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TYTProvider>
      <Component {...pageProps} />
    </TYTProvider>
  )
}

export default MyApp
