import React, { Component } from 'react'
import Image from 'next/image'
import Styles from './Header.module.scss'
import Link from 'next/link'

export default class Header extends Component {
	render() {
		return (
			<div className={Styles.header}>
				<div className='flex justify-center align-center m-left-50'>
					<div className={Styles['header-logo-image']}>
						<Image alt='Eclipse Avatar' width='100' height='100' objectFit='cover' src='/assets/images/logos/Eclipse.svg' />
					</div>
					<Link href='/'><a className='font-size-16 bold text-decoration-none'>Eclipse</a></Link>
				</div>
				<div className='m-right-50 font-size-15'>
					Log In
				</div>
			</div>
		)
	}
}
