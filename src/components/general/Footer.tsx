import Image from "next/image"
import Link from "next/link"

function Footer() {
	return (
		<footer className='flex flex-column align-center bg-dark-gray width-100 p-top-50 p-bottom-50'>
    		<div className='flex flex-row align-center justify-sb'>
				<div className='flex flex-row align-center justify-center p-right-80'>
					<div className='width-v-5 height-v-5'>
						<Image src='/assets/images/logos/NightDevs.svg' width='100' height='100' objectFit='cover'/>
					</div>
					<span className='bold font-size-20'>Night Devs</span>
				</div>
				<nav>
					<span>
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
					<div className='flex width-v-3 height-v-3 justify-center align-center'>
						<img src='/assets/images/general/mail.svg' width='100%' className='fit-cover' />
					</div>
					<div className='flex width-v-3 height-v-3 justify-center align-center'>
						<img src='/assets/images/logos/Discord.svg' width='100%' className='fit-cover' />
					</div>
					<div className='flex width-v-3 height-v-3 justify-center align-center'>
						<img src='/assets/images/logos/GitHub.svg' width='100%' className='fit-cover' />
					</div>
				</nav>
			</div>
			<hr className='width-90 m-top-10 m-bottom-20' style={{borderColor: 'gray'}}/>
			<span className='text-gray'>Copyright © 2021-2022 Night Devs</span>
		</footer>
	)
}

export default Footer
