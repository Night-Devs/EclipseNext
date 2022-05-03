import React, { Component } from 'react'
import Styles from './Guild.module.scss'

interface GuildProps {
    avatarHash: string
    id: string
    name: string
    membersCount: number
}

export default class Guild extends Component<GuildProps> {
    render() {
        return (
            <div className={Styles.guild}>
                <div className='absolute'>
                    <div className={Styles['guild-icon']}>
                        <img className={`${Styles['guild-icon__image']} absolute width-v-12 height-v-12`} src={`https://cdn.discordapp.com/icons/${this.props.id}/${this.props.avatarHash}.webp`} alt={this.props.name} />
                    </div>
                </div>
                <h1 className='m-top-85 m-left-5 font-size-10 absolute'>{this.props.name}</h1>
                <p className='m-top-100 m-left-5 font-size-8 absolute'>Участников: {this.props.membersCount}</p>
            </div>
        )
    }
}
