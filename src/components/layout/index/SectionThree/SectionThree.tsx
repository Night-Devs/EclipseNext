import React, { Component } from 'react'
import Styles from './SectionThree.module.scss'

export default class SectionThree extends Component {
  render() {
    return (
      <section className={`${Styles['section-three']} width-100 flex flex-column align-center`}>
          <h1 className='m-top-40 m-bottom-40 font-size-20'>Я появился в миг между днём и ночью</h1>
      </section>
    )
  }
}
