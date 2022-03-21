import { WithRouterProps } from 'next/dist/client/with-router'
import Header from '../../components/general/Header'
import Footer from '../../components/general/Footer'
import { withRouter } from 'next/router'
import Styles from './guild.module.scss'
import { Component } from 'react'

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
                <div className='relative p-top-40 p-left-60 flex flex-row justify-sb'>
                    <div>
                        <h1>{guild.name}</h1>
                        <p>Участников: {guild.members_count}</p>
                    </div>
                    <div>
                        <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon_hash}.webp`} alt={guild.name} />
                    </div>
                </div>
                <div className={Styles.content}>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Guild)