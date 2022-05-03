import ReactSelect, { StylesConfig, ThemeConfig } from 'react-select'
import chroma from 'chroma-js'

interface Option {
    label: string
    value: string
}

interface ColorOption extends Option {
    color: string
}

const colourStyles1: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: '#7762D2',
      width: '30vw',
      ':hover': {
        borderColor: '#9581ef'
      }
    }),
    menu: (styles) => ({
      ...styles,
      width: '30vw',
      zIndex: 'auto',
    }),
    option: (styles) => ({
        ...styles,
        color: 'white'
    })
}

const colourStyles2: StylesConfig<ColorOption> = {
    ...colourStyles1,
    multiValue: (styles, { data }) => ({
        ...styles,
        color: 'white',
        backgroundColor: chroma(data.color).mix('black').alpha(0.7).css()
    }),
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: chroma(data.color).mix('white').css()
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: chroma(data.color).mix('white').css(),
        ':hover': {
            backgroundColor: data.color,
            color: 'white'
        }
    }),
    option: (styles, { data }) => ({
        ...styles,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        ':before': {
            content: '" "',
            height: '0.6vw',
            display: 'block',
            width: '0.6vw',
            borderRadius: '10vw',
            marginRight: '0.6vw',
            backgroundColor: data.color
        },
        ':hover': {
            backgroundColor: chroma(data.color).mix('black').css(),
            color: chroma(data.color).mix('white').css(),
            ':before': {
                backgroundColor: chroma(data.color).mix('white').css()
            }
        }
    })
}
const theme: ThemeConfig = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        neutral0: '#2F3136',
        neutral10: '#7762D2',
        neutral80: 'white',
        primary50: chroma('#7762D2').alpha(0.6).hex(),
        primary25: chroma('#7762D2').alpha(0.3).hex(),
        primary: '#7762D2'
    }
})

function Select({defaultOption, options, isDisabled, isMulti}: {defaultOption?: Option, options: Option[], isDisabled?: boolean, isMulti?: boolean}): JSX.Element
function Select({defaultOption, options, isDisabled, isMulti, isColored}: {defaultOption?: ColorOption, options: ColorOption[], isDisabled?: boolean, isMulti?: boolean, isColored: true}): JSX.Element
function Select({defaultOption, options, isDisabled = false, isMulti = false, isColored = false}: {defaultOption?: Option | ColorOption, options: Option[] | ColorOption[], isDisabled?: boolean, isMulti?: boolean, isColored?: boolean}) {
    return (
        <div>
            {isColored
                ? <ReactSelect
                    isMulti={isMulti}
                    isDisabled={isDisabled}
                    defaultValue={defaultOption as ColorOption}
                    theme={theme}
                    options={options as ColorOption[]}
                    styles={colourStyles2}
                />
                : <ReactSelect
                    isMulti={isMulti}
                    isDisabled={isDisabled}
                    defaultValue={defaultOption}
                    theme={theme}
                    options={options}
                    styles={colourStyles1}
                />
            }
        </div>
    )
}

export default Select
