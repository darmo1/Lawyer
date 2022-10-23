import { TYTProvider } from '../src/context/transitoTransporte'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TYTProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </TYTProvider>
  )
}

export default MyApp
