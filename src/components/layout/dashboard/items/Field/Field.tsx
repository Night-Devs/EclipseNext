import Styles from './Field.module.scss'
import React from 'react'

export default function Field() {
  return (
    <div>
        <input className={Styles.input} type='text' />
    </div>
  )
}
