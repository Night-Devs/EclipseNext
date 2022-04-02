import Styles from './AutoGreetings.module.scss'
import EmbedConstrucor from '../items/EmbedConstrucor'
import ToggleSwitch from '../items/ToggleSwitch'
import Select from '../items/Select'

export default function AutoGreetings() {
  return (
    <div className='flex flex-column p-left-5'>
        <div>
            <span className='flex flex-row  align-center'>
                <img className={Styles.arrowDown} src='/assets/images/general/arrowDown2.svg' alt='Arrow Down 2' />
                Автоматические приветствия
                <span className='m-left-10'>
                  <ToggleSwitch />
                </span>
            </span>
        </div>
        <ul>
          <li className='p-left-35'>
            <EmbedConstrucor />
          </li>
          <li className='p-left-35'>
            <Select
              options={[{
                  label: '#general',
                  value: '123456789012345678'
                }, {
                  label: '#voice-context',
                  value: '9876543210987654321'
                }]}
            />
          </li>
        </ul>
    </div>
  )
}
