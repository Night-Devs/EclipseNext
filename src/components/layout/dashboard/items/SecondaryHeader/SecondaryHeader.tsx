import { Guild } from '../../../../../types/Discord'
import Navbar, { Selected } from './Navbar/Navbar'
import Styles from './SecondaryHeader.module.scss'

export default function SecondaryHeader({ defaultSelected = 'general', guild }: {defaultSelected?: Selected, guild: Guild}) {
    return (
        <div>
            <div className={Styles.background}>
                <img className='fixed width-100' src='/assets/images/general/abstractBackground.png' alt='Background' />
            </div>
            <div className='relative p-top-70 flex flex-column'>
                <div className='p-left-60 flex flex-row justify-sb'>
                    <div className='p-top-40'>
                        <h1 className='font-size-25'>{guild.name}</h1>
                        <p className='font-size-15'>Участников: {guild.members_count}</p>
                    </div>
                    <div className='p-right-60'>
                        <img className={Styles.icon__image} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`} alt={guild.name} />
                    </div>
                </div>
                <div className='p-left-30 p-top-10 p-right-30'>
                    <Navbar defaultSelected={defaultSelected} id={guild.id} />
                </div>
            </div>
        </div>
    )
}
