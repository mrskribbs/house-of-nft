import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const About: NextPage = () => {
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
					<img className="icon" src="/assets/icon.svg" />
					<span>Read Whitepaper</span>
				</a>
			</div>
			<div className="mosaic">
				<div className="item">
					<img src="/assets/painting.png" className="painting" />
					<div className="item-description">
						<img src="/assets/dagger-icon.svg" />
						<span>Dagger</span>
					</div>
				</div>
				<div className="item">
					<img src="/assets/painting.png" className="painting" />
					<div className="item-description">
						<img src="/assets/dagger-icon.svg" />
						<span>Shield</span>
					</div>
				</div>
				<div className="item">
					<img src="/assets/painting.png" className="painting" />
					<div className="item-description">
						<img src="/assets/dagger-icon.svg" />
						<span>Crossed Swords</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
