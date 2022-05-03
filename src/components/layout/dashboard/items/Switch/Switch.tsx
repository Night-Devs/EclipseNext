import Styles from './ToggleSwitch.module.scss'
import { ChangeEventHandler } from 'react'

export default function ToggleSwitch({onChange}: {onChange?: ChangeEventHandler<HTMLInputElement>}) {
  return (
    <div>
        <label className={Styles.switch}>
            <input type='checkbox' onChange={onChange}/>
            <span className={Styles.slider}></span>
        </label>
    </div>
  )
}
