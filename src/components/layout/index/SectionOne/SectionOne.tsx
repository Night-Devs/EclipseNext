import Styles from './SectionOne.module.scss'
import React, { Component } from 'react'
import Welcome from './Welcome'
import Header from '../../Header'

export default class SectionOne extends Component {
    render() {
        return (
            <section className={Styles['section-one']}>
                <Header />
                <Welcome />
                <div className={Styles['arrow-down']}></div>
            </section>
        )
    }
}
