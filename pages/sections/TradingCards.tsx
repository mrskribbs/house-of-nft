import type { NextPage } from 'next'

const TradingCards: NextPage = () => {
	const data = [
		{
			image: '/assets/trading-cards/swords.png',
			percent: '65%',
			title: 'Genesis Crossed Swords',
			type: 'common',
			description:
				'Crossed Swords are what your kingdom considers to be the basis of your army and are used to gather $House.',
		},
		{
			image: '/assets/trading-cards/shields.png',
			percent: '25%',
			title: 'Genesis Shields',
			type: 'uncommon',
			description:
				'The backbone of your army and are used to protect your non-genesis Crossed Swords and accumulated $House.',
		},
		{
			image: '/assets/trading-cards/swords.png',
			percent: '10%',
			title: 'Genesis Daggers',
			type: 'rare',
			description:
				'Daggers steal $House from Crossed swords and steal non-genesis mints from other players.',
		},
	]
	return (
		<div className="trading-card-container">
			<div className="content">
				<img src="/assets/h.svg" />
				<h2>Trading Card Launch</h2>
				<p>
					The House introduces new game mechanics including Crossed Swords,
					Shields, Daggers, House Guilds, and Terrains. We are looking to add
					value into the ecosystem by not only developing an entertaining,
					strategic game but also creating genuine pieces of art.
				</p>
				<p>
					The House is released as public domain and will share the history of
					the great houses of 14th century Italy.
				</p>
				<a className="button" href="#">
					<img className="icon" src="/assets/socials/whitepaper.svg" />
					<span>Read Whitepaper</span>
				</a>
			</div>
			<div className="stats-container">
				{data.map((item) => {
					return (
						<div className="stats">
							<img src={item.image} />
							<div className="info">
								<h3>
									<span className="percent">{item.percent}</span>
									<span className={'type ' + item.type}>{item.type}</span>
									<span className="title">{item.title}</span>
								</h3>
								<p className="description">{item.description}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default TradingCards
