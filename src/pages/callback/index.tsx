import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Header from '../../components/general/Header/Header'
import Footer from '../../components/general/Footer/Footer'
import { setTokenAction } from '../../store/tokenReducer'
import React, { useEffect, useState } from 'react'
import useToken from '../../hooks/useToken'
import useUser from '../../hooks/useUser'
import Styles from './auth.module.scss'
import { store } from '../../store'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import TokenDTO from '../../dtos/TokenDTO'

function AuthPage ({ router }: WithRouterProps) {
    const tokenResponse = useToken('auto')
    const token = tokenResponse.accessToken
    const user = useUser(token)
    
    const isError = tokenResponse.isError || user.isError
    const isLoading = tokenResponse.isLoading || user.isLoading

    useEffect(() => {
        if (token) {
            store.dispatch(setTokenAction(tokenResponse as Required<TokenDTO>))
        }
    }, [token])
    
    // Countdown
    const [counter, setCounter] = useState(5)
    
    useEffect(() => {
        const timer =
            !isLoading && counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        
        if (counter <= 0 && isError)
            return (router.push('https://discord.com/api/oauth2/authorize?client_id=857545309781360661&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify%20guilds'), undefined)
        
        if (counter <= 0)
            return (router.push('/dashboard/list'), undefined)

        return () => clearInterval(timer as NodeJS.Timer)
    }, [counter, isLoading])
    
    return (
        <main className={`flex flex-column ${isError ? 'bg-red-skew' : 'bg-purple-skew'}`}>
            <Header />

            {isLoading ?
                <div className='m-left-20 flex flex-column align-center' style={{minHeight: '40vw', flex: 1}}>
                    <span className='m-top-40 m-bottom-40 font-size-15 width-v-25 text-center'>Мы вас авторизуем, пожалуйста подождите...</span>
                    <img className={`width-v-10 height-v-10 ${Styles.loading}`} src='/assets/images/general/loading.svg' alt='Loading...' />
                </div>
            :
                <div className='m-left-20 flex flex-column align-center' style={{minHeight: '40vw', flex: 1}}>
                    <span className='m-top-40 m-bottom-40 font-size-15 width-v-25 text-center'>
                        {isError ? <>Что-то пошло не так пока мы пытались авторизовать вас</>
                                 : <>
                                    <p>Приветствую <span className='bold'>{user.username}#{user.discriminator}</span>!</p>
                                    <p>Вы успешно авторизованны!</p>
                                   </>}
                    </span>
                    <img className={`width-v-10 height-v-10 ${Styles.loading}`} src='/assets/images/general/loading.svg' alt='Loading...' />
                    <span className='font-size-15 m-top-10 text-center'>
                        <p>
                            {isError ? <>Следующая попытка авторизоваться</>
                                     : <>Перенаправление на <Link href='/dashboard/list'><span className='pointer bold'>панель управления</span></Link></>}
                        </p>
                        <p>через <span className='bold'>{counter}</span> секунд</p>
                    </span>
                </div>
            }
            <Footer />
        </main>
    )
}

export default dynamic(Promise.resolve(withRouter(AuthPage)), {ssr: false})
