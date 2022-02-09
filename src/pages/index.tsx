import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eclipse</title>
      </Head>

      <Header />

      <main>
        <h1>
          Welcome to Eclipse
        </h1>
      </main>

      <Footer />
    </div>
  )
}

export default Home
