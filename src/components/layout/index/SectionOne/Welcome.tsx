import Styles from './Welcome.module.scss'
import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div className={Styles['welcome-wrapper']}>
                <div className={Styles.welcome}>
                    <h1 className={Styles['welcome-greeting']}>Добро пожаловать на тёмную сторону</h1>
                    <p className={Styles['welcome-about']}>Меня зовут <span className='text-purple bold'>Eclipse</span>! Я создан для того, чтобы помочь вам в развитии вашего сервера</p>
                    <button className='btn m-top-50 font-size-13'>Добавить!</button>
                    <p className={Styles['welcome-ps']}>Псс....чтобы узнать больше информации обо мне, листай вниз)</p>
                </div>
            </div>
        )
    }
}
