import { CSSProperties, useEffect, useState } from 'react'
import { getUser } from '../../services/auth'
// import { subscribe } from 'redux-subscriber'
import Styles from './Header.module.scss'
import { store } from '../../store'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({style}: {style?: CSSProperties}) {
	const token = store.getState().auth.token
	const [user, setUser] = useState<any | undefined>()

	useEffect(
		() => {
			if (!token)
				return

			getUser(token).then(setUser)
		}
	, [token])
	
	// subscribe('auth.token', console.log) // Here was a bag but while I tried to find out what causes it, it just dissapeared LMAO

	return (
		<div className='flex justify-sb p-top-20 align-center width-100' style={style}>
			<div className='flex justify-center align-center m-left-50'>
				<div className={`flex justify-center ${Styles['header-logo-image']}`}>
					<Image alt='Eclipse Avatar' width='100' height='100' objectFit='cover' src='/assets/images/logos/Eclipse.svg' />
				</div>
				<Link href='/'><a className='font-size-16 bold text-decoration-none'>Eclipse</a></Link>
			</div>
			<div className='flex flex-row m-right-50 align-center font-size-16 bold'>
				{
					user
					? <span className='flex align-center'>
						<img
							className='width-v-4 height-v-4 m-right-5'
							style={{borderRadius: '100vw'}}
							src={user.avatar
									? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
									: `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`}
							alt='Avatar'
						/>
						{user.username}#{user.discriminator}
					</span>
					: <a className='flex flex-row align-center' href='https://discord.com/api/oauth2/authorize?client_id=857545309781360661&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify%20guilds%20guilds.members.read'>
						<img className='width-v-3 height-v-2' src='/assets/images/general/signIn.svg' alt='Sign In Icon' />
						<span className='font-size-13 bold m-left-2'>ВОЙТИ</span>
					</a>
				}
			</div>
		</div>
	)
}