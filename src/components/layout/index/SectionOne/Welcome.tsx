import React, { Component } from 'react'
import Styles from './Welcome.module.scss'
import Button from '../../../general/Button'

export default class Welcome extends Component {
    render() {
        return (
            <div className={Styles['welcome-wrapper']}>
                <div className={Styles.welcome}>
                    <h1 className={Styles['welcome-greeting']}>Когда мечты затмила реальность...</h1>
                    <p className={Styles['welcome-about']}>Меня зовут <span className='text-purple bold'>Eclipse</span>! Я создан для того, чтобы помочь вам в развитии вашего сервера</p>
                    <Button>Добавить!</Button>
                    <p className={Styles['welcome-ps']}>Псс....чтобы узнать больше информации обо мне, листай вниз)</p>
                </div>
            </div>
        )
    }
}
