import '@/css/index.scss'
import Head from 'next/head'
import WrapperLayout from '@/layouts/WrapperLayout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <WrapperLayout>
        <Component {...pageProps} />
      </WrapperLayout>
    </>
  )
}

export default MyApp
