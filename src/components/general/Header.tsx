import Styles from './Header.module.scss'
import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default class Header extends Component {
	render() {
		return (
			<div className='flex justify-sb m-top-20 align-center width-100'>
				<div className='flex justify-center align-center m-left-50'>
					<div className={`flex justify-center ${Styles['header-logo-image']}`}>
						<Image alt='Eclipse Avatar' width='100' height='100' objectFit='cover' src='/assets/images/logos/Eclipse.svg' />
					</div>
					<Link href='/'><a className='font-size-16 bold text-decoration-none'>Eclipse</a></Link>
				</div>
				<div className='flex flex-row m-right-50 align-center'>
					<img className='width-v-3 height-v-2' src='/assets/images/general/signIn.svg' alt='Sign In Icon' />
					<span className='font-size-13 bold m-left-2'>ВОЙТИ</span>
				</div>
			</div>
		)
	}
}
