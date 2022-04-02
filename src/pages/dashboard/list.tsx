import Guild from '../../components/layout/dashboard/guilds/Guild'
import Footer from '../../components/general/Footer'
import Header from '../../components/general/Header'
import { getGuilds } from '../../services/auth'
import Styles from './list.module.scss'
import dynamic from 'next/dynamic'
import { Component } from 'react'
import Link from 'next/link'
import { store } from '../../store'

interface GuildsPageState {
	guilds: any[]
}

class Guilds extends Component<{}, GuildsPageState> {
	constructor (props: {}) {
		super(props)

		this.state = {
			guilds: []
		}
	}
	
	async componentDidMount() {
		const guilds = (await getGuilds(store.getState().auth.token))
			.filter((guild: any) => (+guild.permissions & 0x0000000000000020) == 0x0000000000000020)

		this.setState({guilds: guilds})

		console.log(guilds)
	}

	render() {
		return (
			<main className='bg-purple-skew flex flex-column align-center'>
				<Header />
				<div style={{flex: 1}} className='flex flex-column align-center'>
					<h1 className='m-top-20'>Пожалуйста, выберите сервер</h1>
					{!this.state.guilds.length
					? <>
						{/* TODO: Loading Animation */}
					</>
					:
						<ul className='m-top-20 flex flex-row width-v-80' style={{flexWrap: 'wrap', gap: '2.5vw'}}>
								{this.state.guilds.map((guild: any) =>
									<li className={Styles.guild} key={guild.id}>
										<Link href={`/dashboard/${encodeURIComponent(guild.id)}`}>
											<a>
												<Guild
													avatarHash={guild.icon}
													id={guild.id}
													name={guild.name}
													membersCount={guild.member_count}
												/>
											</a>
										</Link>
									</li>
								)}
						</ul>
					}
				</div>
				<Footer />
			</main>
		)
	}
}

export default dynamic(Promise.resolve(Guilds), {ssr: false})
