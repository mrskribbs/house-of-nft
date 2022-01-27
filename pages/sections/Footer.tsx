import type { NextPage } from 'next'
import Image from 'next/image'

const Footer: NextPage = () => {
	return (
		<footer>
			<div className="hero-footer">
				<h1 className="hero-text">
					Fine Art,
					<span>Cultural Exploration,</span>
					Technological Innovation.
				</h1>

				<div className="actions">
					<a className="button" href="#">
						<img className="icon" src="/assets/socials/whitepaper.svg" />
						<span>Read Whitepaper</span>
					</a>
					<a className="button" href="#">
						<img className="icon" src="/assets/socials/discord.svg" />
						<span>Join Discord</span>
					</a>
					<a className="button" href="#">
						<img className="icon" src="/assets/socials/twitter.svg" />
						<span>Follow Twitter</span>
					</a>
				</div>
			</div>

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
			<div className="footer">
				<a href="https://skribbs.com" target="_blank" rel="noopener noreferrer">
					Powered by
					<Image
						src="/assets/skribbs.svg"
						alt="Skribbs Logo"
						width={100}
						height={24}
					/>
				</a>
			</div>
		</footer>
	)
}

export default Footer
