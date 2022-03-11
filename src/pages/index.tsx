import SectionThree from '../components/layout/index/SectionThree/SectionThree'
import SectionTwo from '../components/layout/index/SectionTwo/SectionTwo'
import SectionOne from '../components/layout/index/SectionOne/SectionOne'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='app'>
      <Head>
          <title>Eclipse</title>
      </Head>

      <main className='flex flex-column align-center'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  )
}

export default Home
