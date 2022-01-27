import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Guilds: NextPage = () => {
	return (
		<div className="guild-container">
			<div className="content">
				<h2>Genesis House Guilds</h2>
				<p>
					There are four different House guilds that will live within the P2E
					house ecosystem and each guild will offer a different level of boost
					to your Crossed Swords $House generation abilities, Shields protection
					abilities, and Daggers stealing abilities.
				</p>
			</div>
			<div className="blocks">
				<div className="guild stats-container">
					<img src="/assets/crest.png" />
					<div className="stats">
						<h4>
							The House of <span>Medici</span>
						</h4>
						<strong>Upgrades</strong>
						<p>
							Crossed Swords <span>+2%</span>
						</p>
						<p>
							Shield <span>+2%</span>
						</p>
						<p>
							Dagger <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="guild stats-container">
					<img src="/assets/crest.png" />

					<div className="stats">
						<h4>
							The House of <span>Albizzi</span>
						</h4>
						<strong>Upgrades</strong>
						<p>
							Crossed Swords <span>+2%</span>
						</p>
						<p>
							Shield <span>+2%</span>
						</p>
						<p>
							Dagger <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="guild stats-container">
					<img src="/assets/crest.png" />
					<div className="stats">
						<h4>
							The House of <span>Pazzi</span>
						</h4>
						<strong>Upgrades</strong>
						<p>
							Crossed Swords <span>+2%</span>
						</p>
						<p>
							Shield <span>+2%</span>
						</p>
						<p>
							Dagger <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="guild stats-container">
					<img src="/assets/crest.png" />
					<div className="stats">
						<h4>
							The House of <span>Borgia</span>
						</h4>
						<strong>Upgrades</strong>
						<p>
							Crossed Swords <span>+2%</span>
						</p>
						<p>
							Shield <span>+2%</span>
						</p>
						<p>
							Dagger <span>+2%</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Guilds
