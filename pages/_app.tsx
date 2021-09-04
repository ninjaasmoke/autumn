import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1"
          />
          <meta name="description" content= "Code to image. Beautiful code, with Autumn Autumn is kind of an online code editor. Code & save images of the code or the code it self!" />
          <meta name="robots" content= "index, follow" />
          <meta name="keywords" content="code, image, screenshot" />
          <meta name="theme-color" content="#000000" />

          
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="author" content="ninjaasmoke" />
          <meta name="copyright" content="ninjaasmoke" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Autumn" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
