import Styles from './Select.module.scss'
import ReactSelect from 'react-select'
import { useState } from 'react'

interface Option {
    label: string
    value: string
}

export default function Select({defaultSelected, options}: {defaultSelected?: string, options: Option[]}) {
    const [selected, setSelected] = useState(defaultSelected)
    
    return (
        <div>
            {/* <select className={Styles.select}>
                {
                    options.map(option =>
                        <option value={option.value}>{option.name}</option>
                    )
                }
            </select> */}
            <ReactSelect options={options}/>
        </div>
    )
}
