import type { NextPage } from 'next'

const Hero: NextPage = () => {
	return (
		<div className="hero-wrapper">
			<img className="thing thing1" src="assets/thing1.svg" />
			<img className="thing thing2" src="assets/thing2.svg" />
			<img className="thing thing3" src="assets/thing3.svg" />
			<img className="thing thing4" src="assets/thing4.svg" />
			<img className="thing vertical-text" src="assets/vertical-text.svg" />
			<img className="thing coordinates" src="assets/coordinates.svg" />

			<div className="hero-header">
				<h1 className="hero-text">
					Fine Art,
					<span>Cultural Exploration,</span>
					Technological Innovation.
				</h1>
				<p>
					We are Wisdom, We are Culture, We are United,{' '}
					<span>and We are The House.</span>
				</p>
				<div className="actions">
					<a className="button" href="#">
						<img className="icon" src="/assets/discord.svg" />
						<span>Join Discord</span>
					</a>
					<a className="button" href="#">
						<img className="icon" src="/assets/twitter.svg" />
						<span>Follow Twitter</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
