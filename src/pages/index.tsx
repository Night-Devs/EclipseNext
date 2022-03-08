import SectionThree from '../components/layout/index/SectionThree/SectionThree'
import SectionTwo from '../components/layout/index/SectionTwo/SectionTwo'
import SectionOne from '../components/layout/index/SectionOne/SectionOne'
import Styles from './index.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className={Styles.app}>
      <Head>
          <title>Eclipse</title>
      </Head>

      <main className={Styles.main}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  )
}

export default Home
