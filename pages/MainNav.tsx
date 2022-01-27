import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const MainNav: NextPage = () => {
	return (
		<div className="main-nav">
			<img className="logo" src="assets/logo.svg" />
			<div className="socials">
				<a href="#">
					<img className="icon" src="/assets/icon.svg" />
				</a>
				<a href="#">
					<img className="icon" src="/assets/discord.svg" />
				</a>
				<a href="#">
					<img className="icon" src="/assets/twitter.svg" />
				</a>
			</div>
		</div>
	)
}

export default MainNav
