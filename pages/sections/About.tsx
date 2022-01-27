import type { NextPage } from 'next'

const About: NextPage = () => {
	const data = [
		{
			image: '/assets/paintings/dagger.png',
			icon: '/assets/icons/dagger.svg',
			title: 'Dagger',
		},
		{
			image: '/assets/paintings/shield.png',
			icon: '/assets/icons/shield.svg',
			title: 'Shield',
		},
		{
			image: '/assets/paintings/swords.png',
			icon: '/assets/icons/swords.svg',
			title: 'Crossed Swords',
		},
	]
	return (
		<div className="about-container">
			<div className="content">
				<img src="/assets/h.svg" />
				<h2>About The House</h2>
				<p>
					The House will be a P2E based game focused on both high level game
					theory architecture and high caliber artistic design. What does this
					mean? It means that we will deliver you a trading card game that will
					function as much more than just your average card. We will tell the
					story of the great houses of 14th century Italy while simultaneously
					laying the foundation for technological innovation. We will strive to
					build kingdoms together while fostering the growth of our community.
				</p>
				<a className="button" href="#">
					<img className="icon" src="/assets/socials/whitepaper.svg" />
					<span>Read Whitepaper</span>
				</a>
			</div>
			<div className="mosaic">
				{data.map((item) => {
					return (
						<div className="item">
							<img src={item.image} className="painting" />
							<div className="item-description">
								<img className="icon" src={item.icon} />
								<span>{item.title}</span>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default About
