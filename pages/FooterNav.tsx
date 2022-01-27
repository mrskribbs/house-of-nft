import type { NextPage } from 'next'

const FooterNav: NextPage = () => {
	return (
		<div className="footer-nav-wrapper">
			<div className="footer-nav">
				<div className="logo">
					<img className="initial" src="assets/h-yellow.svg" />
					<img className="wordmark" src="assets/logo-wordmark.svg" />
				</div>
				<img className="thing yellow-thing" src="/assets/extras/thing5.svg" />
				<img className="thing star-thing" src="/assets/extras/thing3.svg" />
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

export default FooterNav
