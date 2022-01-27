import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const TradingCards: NextPage = () => {
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
				<div className="stats">
					<img src="/assets/trading-cards/swords.png" />
					<div className="info">
						<h3>
							<span className="percent">65%</span>
							<span className="type common">COMMON</span>
							<span className="title">Genesis Crossed Swords</span>
						</h3>
						<p className="description">
							Crossed Swords are what your kingdom considers to be the basis of
							your army and are used to gather $House.
						</p>
					</div>
				</div>
				<div className="stats">
					<img src="/assets/trading-cards/shields.png" />
					<div className="info">
						<h3>
							<span className="percent">25%</span>
							<span className="type uncommon">UNCOMMON</span>
							<span className="title">Genesis Shields</span>
						</h3>
						<p className="description">
							The backbone of your army and are used to protect your non-genesis
							Crossed Swords and accumulated $House.
						</p>
					</div>
				</div>

				<div className="stats">
					<img src="/assets/trading-cards/daggers.png" />
					<div className="info">
						<h3>
							<span className="percent">10%</span>
							<span className="type rare">RARE</span>
							<span className="title">Genesis Daggers</span>
						</h3>
						<p className="description">
							Daggers steal $House from Crossed swords and steal non-genesis
							mints from other players.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TradingCards
