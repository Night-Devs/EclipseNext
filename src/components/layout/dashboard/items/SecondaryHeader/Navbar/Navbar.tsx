import Styles from './Navbar.module.scss'
import Link from 'next/link'

export type Selected = 'general' | 'privateRooms' | 'audit' | 'liders' | 'autoModeration' | 'customCommands'

export default function Navbar({defaultSelected = 'general', id}: {defaultSelected?: Selected, id: string}) {
    return (
        <div>
            <nav>
                <ul className='flex justify-sb font-size-15'>
                    <li className={(defaultSelected == 'general' && Styles.selected) || ''}>
                        <Link href={`/dashboard/${id}/`}><a>Общее</a></Link>
                    </li>
                    <li className={(defaultSelected == 'privateRooms' && Styles.selected) || ''}>
                        <Link href={`/dashboard/${id}/private-rooms`}><a>Приватные комнаты</a></Link>
                    </li>
                    <li className={(defaultSelected == 'audit' && Styles.selected) || ''}>
                        <Link href={`/dashboard/${id}/audit`}><a>Аудит</a></Link>
                    </li>
                    <li className={(defaultSelected == 'liders' && Styles.selected) || ''}>
                        <Link href={`/dashboard/${id}/liders`}><a>Лидеры</a></Link>
                    </li>
                    <li className={(defaultSelected == 'autoModeration' && Styles.selected) || ''}>
                        <Link href={`/dashboard/${id}/auto-moderation`}><a>Авто-модерация</a></Link>
                    </li>
                    <li className={(defaultSelected == 'customCommands' && Styles.selected) || ''}>
                        <Link href={`/dashboard/${id}/custom-commands`}><a>Кастомные команды</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
