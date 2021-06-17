import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }) {
  return(  
<Layout> <Component {...pageProps} /></Layout>
  )
}
export default MyApp; 

