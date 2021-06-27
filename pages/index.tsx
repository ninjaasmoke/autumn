import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Autumn | Code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

    </div>
  )
}

export default Home;