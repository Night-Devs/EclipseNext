import { Author, Field, Title } from '../../../../../types/Discord'
import Styles from './EmbedConstructor.module.scss'
import { ChangeEvent, useState } from 'react'

type HexString = `#${string}` | undefined

export default function EmbedConstrucor({isDisabled = false}: {isDisabled?: boolean}) {
    const [lineColor, setLineColor] = useState<HexString>('#fff')
    const [author, setAuthor] = useState<Author>({})
    const [title, setTitle] = useState<Title>({})
    const [description, setDescription] = useState('')
    const [fields, setFields] = useState<Field[]>([])

    const handleChangeField = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
        switch (event.target.name) {
            // Color
            case 'color':
                setLineColor(event.target.value as HexString)
                break

            // Author
            case 'author':
                setAuthor({...author, name: event.target.value})
                break
            case 'authorUrl':
                setAuthor({...author, url: event.target.value})
                break
            case 'authorIconUrl':
                setAuthor({...author, iconUrl: event.target.value})
                break
        
            // Title
            case 'title':
                setTitle({...title, name: event.target.value})
                break
            case 'titleUrl':
                setTitle({...title, url: event.target.value})
                break
            
            // Description
            case 'description':
                setDescription(event.target.value)
                break
            
            // Fields
            case 'fieldName': { // Added this cuz names of variables were conflicting
                    const parent = event.target.parentElement as HTMLLIElement
                    const index = +(parent.attributes.getNamedItem('key')?.value || '0')
                    
                    const fieldsCopy = fields.slice()
                    fieldsCopy[index].name = event.target.value
                    setFields(fieldsCopy)
                }
                break
            
            case 'fieldValue': { // Added this cuz names of variables were conflicting
                    const parent = event.target.parentElement as HTMLLIElement
                    const index = +(parent.attributes.getNamedItem('key')?.value || '0')
                    
                    const fieldsCopy = fields.slice()
                    fieldsCopy[index].value = event.target.value
                    setFields(fieldsCopy)
                }
                break
        }
    }

    const handleAddField = () => setFields([...fields, {}])

    return (
        <div className={Styles.embedConstrucor} style={{borderLeft: '#fff solid 0.55vw'}}>
            <span className='flex align-center'>
                Line Color:
                <input onChange={handleChangeField} className={Styles['input-color']} disabled={isDisabled} name='color' type='color' />
            </span>
            <span className='flex flex-column'>
                <div className='flex align-center width-v-35 p-bottom-5'>
                    Author: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='author' type='text' />
                </div>
                <span className='flex font-size-10 p-bottom-5 justify-end align-center' style={{width: 'auto', marginRight: '8vw'}}>
                    URL: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='authorUrl' type='text' />
                </span>
                <span className='flex font-size-10 p-bottom-8 justify-end align-center' style={{width: 'auto', marginRight: '8vw'}}>
                    Icon URL: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='authorIconUrl' type='text' />
                </span>
            </span>
            <span className='flex flex-column'>
                <div className='flex align-center width-v-35 p-bottom-5'>
                    Title: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='title' type='text' />
                </div>
                <span className='flex font-size-10 p-bottom-5 justify-end align-center' style={{width: 'auto', marginRight: '9.5vw'}}>
                    URL: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='titleUrl' type='text' />
                </span>
            </span>
            <span className='flex flex-column p-bottom-10'>
                Description:
                <textarea onChange={handleChangeField} className={Styles['input-area']} disabled={isDisabled} name='description' />
            </span>
            <span>
                Fields:
                <ul>
                    {
                        fields.length
                        ? fields.map((_field, index) => 
                            <li key={index} className='flex flex-column justify-start'>
                                <input onChange={handleChangeField} className={Styles.input} name='fieldName' type='text'/>
                                <textarea className={`${Styles['input-area-small']} m-top-5 m-left-5`} disabled={isDisabled} name='fieldValue' />
                                <hr className={Styles['field-separator']} />
                            </li>
                        )
                        : <li className='m-bottom-5'>Looks like you hasn't added any fields</li>
                    }
                </ul>
                <span className='flex align-center m-bottom-5 pointer' onClick={handleAddField}>
                    <img src='/assets/images/general/plus.svg' alt='Plus' className='width-v-2 height-v-2 m-right-5'/> Add field
                </span>
                <span className='flex flex-column'>
                    <div className='flex align-center width-v-35 p-bottom-5'>
                        Footer: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='footer' type='text' />
                    </div>
                    <span className='flex font-size-10 p-bottom-5 justify-end align-center' style={{width: 'auto', marginRight: '8vw'}}>
                        Icon URL: <input onChange={handleChangeField} className={Styles.input} disabled={isDisabled} name='footerIconUrl' type='text' />
                    </span>
                </span>
            </span>
        </div>
    )
}
