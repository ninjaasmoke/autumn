import Head from 'next/head'
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>autumn | code</title>
        <meta name="description" content="Code to image. Beautiful code, with Autumn Autumn is kind of an online code editor. Code & save images of the code or the code it self!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="code, image, screenshot" />
        <meta name="theme-color" content="#000000" />


        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="ninjaasmoke" />
        <meta name="copyright" content="ninjaasmoke" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Autumn" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="autumn | code" />
        <meta name="description" content="Code to image. Beautiful code, with Autumn Autumn is kind of an online code editor. Code & save images of the code or the code it self!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autumn.vercel.app/" />
        <meta property="og:title" content="autumn | code" />
        <meta property="og:description" content="Code to image. Beautiful code, with Autumn Autumn is kind of an online code editor. Code & save images of the code or the code it self!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/ninjaasmoke/autumn/main/autumn.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://autumn.vercel.app/" />
        <meta property="twitter:title" content="autumn | code" />
        <meta property="twitter:description" content="Code to image. Beautiful code, with Autumn Autumn is kind of an online code editor. Code & save images of the code or the code it self!" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/ninjaasmoke/autumn/main/autumn.png" />
      </Head>

      {/* <Nav />
      <div className={styles.navSpace} /> */}
      <div className={styles.main}>
        <Landing />
      </div>

    </div>
  )
}

export default Home;