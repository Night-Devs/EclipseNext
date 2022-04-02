import Styles from './ToggleSwitch.module.scss'

export default function ToggleSwitch() {
  return (
    <div>
        <label className={Styles.switch}>
            <input type='checkbox' />
            <span className={Styles.slider}></span>
        </label>
    </div>
  )
}
