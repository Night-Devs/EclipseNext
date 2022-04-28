import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import { getToken, getUser } from '../services/auth'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import React, { Component } from 'react'
import Styles from './auth.module.scss'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { setTokenAction } from '../store/authReducer'
import { store } from '../store'

interface AuthPageState {
    counter: number
    token?: string
    user?: any
    error?: boolean
}

class AuthPage extends Component<WithRouterProps, AuthPageState> {
    constructor(props: WithRouterProps) {
        super(props)

        this.state = {
            counter: 5,
            token: undefined,
            user: undefined,
            error: undefined
        }
    }
    async componentDidMount() {
        const code = new URLSearchParams(this.props.router.asPath).get('/auth?code')

        const tokenResponse = await getToken(code || '')
        const token = tokenResponse instanceof Error ? ' ' : tokenResponse.accessToken

        const userResponse = await getUser(token)
        const user = userResponse instanceof Error ? {} : userResponse

        const error = !code || tokenResponse instanceof Error || userResponse instanceof Error
        
        this.setState({token, user, error})

        if (token) {
            const dispatch = store.dispatch
            dispatch(setTokenAction(token))
        }

        setInterval(() => {
            if (this.state.counter > 0)
                return this.setState({counter: this.state.counter -1})
            if (error)
                return this.props.router.push('https://discord.com/api/oauth2/authorize?client_id=857545309781360661&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify%20guilds')
            this.props.router.push('/dashboard/list')
        }, 1000)
    }

    render() {
        return (
            <main className={`flex flex-column ${this.state.error ? 'bg-red-skew' : 'bg-purple-skew'}`}>
                <Header />

                {!this.state.token || !this.state.user ? 
                    <div className='m-left-20 flex flex-column align-center' style={{minHeight: '40vw', flex: 1}}>
                        <span className='m-top-40 m-bottom-40 font-size-15 width-v-25 text-center'>Мы вас авторизуем, пожалуйста подождите...</span>
                        <img className={`width-v-10 height-v-10 ${Styles.loading}`} src='/assets/images/general/loading.svg' alt='Loading...' />
                    </div>
                :
                    <div className='m-left-20 flex flex-column align-center' style={{minHeight: '40vw', flex: 1}}>
                        <span className='m-top-40 m-bottom-40 font-size-15 width-v-25 text-center'>
                            {this.state.error   ? <>Что-то пошло не так пока мы пытались авторизовать вас</>
                                                : <>
                                                    <p>Приветствую <span className='bold'>{this.state.user.username}#{this.state.user.discriminator}</span>!</p>
                                                    <p>Вы успешно авторизованны!</p>
                                                </>}
                        </span>
                        <img className={`width-v-10 height-v-10 ${Styles.loading}`} src='/assets/images/general/loading.svg' alt='Loading...' />
                        <span className='font-size-15 m-top-10 text-center'>
                            <p>
                                {this.state.error   ? <>Следующая попытка авторизоваться</>
                                                    : <>Перенаправление на <Link href='/dashboard/list'><span className='pointer bold'>панель управления</span></Link></>}
                            </p>
                            <p>через <span className='bold'>{this.state.counter}</span> секунд</p>
                        </span>
                    </div>
                }
                <Footer />
            </main>
        )
    }
}

export default dynamic(Promise.resolve(withRouter(AuthPage)), {ssr: false})
