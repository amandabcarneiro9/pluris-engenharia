import '../styles/globals.scss'
import Hamburger from 'hamburger-react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false
library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
