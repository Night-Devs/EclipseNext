import Styles from './AutoGreetings.module.scss'
import EmbedConstrucor from '../items/EmbedConstrucor'
import ToggleSwitch from '../items/ToggleSwitch'
import { ChangeEvent, useState } from 'react'
import Select from '../items/Select'

export default function AutoGreetings() {
  const [isExpanded, setExpanded] = useState(false)
  const [isAnimatingAppearence, setAnimatingAppearence] = useState(false)
  const [isDisabled, setDisabled] = useState(true)

  const changeDisabled = () => setDisabled(!isDisabled)

  const changeExpanded = () => {
    if (isAnimatingAppearence) return
    setExpanded(!isExpanded)
    setAnimatingAppearence(true)
    setTimeout(() => {
        setAnimatingAppearence(false)
      }, 750
    )
  }

  return (
    <div className='flex flex-column p-left-5'>
        <div>
            <span className='flex flex-row  align-center'>
                <img className={Styles.arrowDown} onClick={changeExpanded} style={{transform: isExpanded ? 'rotate(-180deg)' : 'none'}} src='/assets/images/general/arrowDown2.svg' alt='Arrow Down 2' />
                Автоматические приветствия
                <span className='m-left-10'>
                  <ToggleSwitch onChange={changeDisabled} />
                </span>
            </span>
        </div>
        <div className='relative'>
          <div style={{display: isAnimatingAppearence ? 'block' : isExpanded ? 'block' : 'none'}} className={isAnimatingAppearence ? (isExpanded ? Styles.animatedAppearence : Styles.animatedDisappearence) : ''}>
            <ul className='p-left-35 flex flex-column' style={{gap: '1vw'}}>
              <li>
                Сообщение на сервере:
                <EmbedConstrucor isDisabled={isDisabled} />
              </li>
              <li>
                Канал на сервере:
                <Select
                  isDisabled={isDisabled}
                  options={[{
                      label: '#general',
                      value: '123456789012345678'
                    }, {
                      label: '#voice-context',
                      value: '9876543210987654321'
                    }]}
                />
              </li>
              <li>
                Сообщение в ЛС:
                <EmbedConstrucor />
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
