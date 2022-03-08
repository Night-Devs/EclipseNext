import Image from 'next/image'
import './Header.module.scss'

function Header() {
	return (
		<div className="header">
			<Image alt="Eclipse Avatar" src="/eclipse.svg" width="50" height="50" />
			<p style={{fontSize: "15"}}>Eclipse</p>
		</div>
	)
}

export default Header
