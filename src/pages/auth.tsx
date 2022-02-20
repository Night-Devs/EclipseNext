import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import useToken from '../hooks/useToken'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Auth: NextPage = () => {
  const router = useRouter()

  const code = new URLSearchParams(router.asPath).get('/auth?code')
  
  const res = useToken(code || '')
  const token = res.error ? '' : res.data?.accessToken
  
  return (
    <div>
      <Head>
        <title>Eclipse</title>
      </Head>

      <Header />

      <main style={{marginTop: '10vh'}}>
        <h1>
          {token
          ? <>Successfully authenticated! Welcome to Eclipse 😉</>
          : <>Ooops, something went wrong while we tried to authorize you, please go to <Link href="/">main page</Link> and try again later</>}
        </h1>
      </main>

      <Footer />
    </div>
  )
}

export default Auth
