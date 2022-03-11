import Styles from './SectionOne.module.scss'
import Header from '../../../general/Header'
import React, { Component } from 'react'
import Welcome from './Welcome'

export default class SectionOne extends Component {
    render() {
        return (
            <section className='bg-purple-skew flex flex-column width-100 align-center'>
                <Header />
                <Welcome />
                <div className={Styles['arrow-down']}></div>
            </section>
        )
    }
}
