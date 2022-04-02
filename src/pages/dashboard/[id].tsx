import { WithRouterProps } from 'next/dist/client/with-router'
import Header from '../../components/general/Header'
import Footer from '../../components/general/Footer'
import { withRouter } from 'next/router'
import Styles from './guild.module.scss'
import { Component } from 'react'
import AutoGreetings from '../../components/layout/dashboard/pages/AutoGreetings'

class Guild extends Component<WithRouterProps> {
    render() {
        const guild = {
            id: '822157545622863902',
            name: 'Название сервера',
            icon_hash: 'a_a6b2c0b03c28d8484808b1872627fd75',
            members_count: 999,
        }

        return (
            <div>
                <div className={Styles.background}></div>
                <Header />
                <div className='relative p-top-10 flex flex-column'>
                    <div className='p-left-60 flex flex-row justify-sb'>
                        <div className='p-top-40'>
                            <h1 className='font-size-25'>{guild.name}</h1>
                            <p className='font-size-15'>Участников: {guild.members_count}</p>
                        </div>
                        <div className='p-right-60'>
                            <img className={Styles.icon__image} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon_hash}.webp`} alt={guild.name} />
                        </div>
                    </div>
                    <div className='p-left-30 p-top-10 p-right-30'>
                        <nav>
                            <ul className='flex justify-sb font-size-15'>
                                <li className={Styles.selected}>
                                    Общее
                                </li>
                                <li>
                                    Приватные комнаты
                                </li>
                                <li>
                                    Аудит
                                </li>
                                <li>
                                    Лидеры
                                </li>
                                <li>
                                    Авто-модерация
                                </li>
                                <li>
                                    Кастомные команды
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={Styles.content}>
                    <AutoGreetings />
                </div>
                <Footer style={{paddingTop: '21vw'}}/>
            </div>
        )
    }
}

export default withRouter(Guild)