import type { NextPage } from 'next'

const MainNav: NextPage = () => {
	return (
		<div className="main-nav-wrapper">
			<div className="main-nav">
				<img className="logo" src="assets/logo.svg" />
				<div className="socials">
					<a href="#">
						<img className="icon" src="/assets/socials/whitepaper.svg" />
					</a>
					<a href="#">
						<img className="icon" src="/assets/socials/discord.svg" />
					</a>
					<a href="#">
						<img className="icon" src="/assets/socials/twitter.svg" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default MainNav
