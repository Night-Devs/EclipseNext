import Styles from './Footer.module.scss'
import { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer({style}: {style?: CSSProperties}) {
	return (
		<footer style={style} className='flex flex-column align-center bg-dark-gray width-100 p-top-30 p-bottom-30'>
    		<div className='flex flex-row align-center justify-sb'>
				<div className='flex flex-row align-center justify-center p-right-80'>
					<div className='width-v-5 height-v-5'>
						<Image src='/assets/images/logos/NightDevs.svg' width='100' height='100' objectFit='cover'/>
					</div>
					<span className='bold font-size-20'>Night Devs</span>
				</div>
				<nav>
					<span className='font-size-13'>
						<Link href='/'>
							<span>Инструкция</span>
						</Link>
						&nbsp;|&nbsp;
						<Link href='/'>
							<span>Условия использования</span>
						</Link>
						&nbsp;|&nbsp;
						<Link href='/'>
							<span>Политика конфеденциальности</span>
						</Link>
					</span>
				</nav>
				<nav className='flex flex-row justify-sb width-v-12 align-center p-left-80'>
					<a href='mail://NightDevs.Github@google.com'>
						<div className={`flex width-v-3 height-v-3 justify-center align-center pointer ${Styles['mail-icon']}`}>
						</div>
					</a>
					<a href='https://discord.gg/PHuvYMrvdr'>
						<div className={`flex width-v-3 height-v-3 justify-center align-center pointer ${Styles['discord-icon']}`}>
						</div>
					</a>
					<a href='https://github.com/Night-Devs'>
						<div className={`flex width-v-3 height-v-3 justify-center align-center pointer ${Styles['github-icon']}`}>
						</div>
					</a>
				</nav>
			</div>
			<hr className='width-90 m-top-10 m-bottom-20' style={{borderColor: 'gray'}}/>
			<span className='text-gray font-size-13'>Copyright © 2021-2022 Night Devs</span>
		</footer>
	)
}

export default Footer
