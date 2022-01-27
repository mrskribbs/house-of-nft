import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Terrain: NextPage = () => {
	return (
		<div className="terrain-container">
			<div className="content">
				<h2>Genesis Terrain</h2>
				<p>
					There are five separate possible terrains to be obtained upon mint
					that will influence P2E game mechanics, similar to house guilds. Each
					terrain will affect your Crossed Swords $House generation abilities,
					Shields protection abilities, and Daggers stealing abilities.
				</p>
			</div>
			<div className="blocks">
				<div className="terrain stats-container">
					<div className='image islands'/>
					<div className="stats">
						<h4>Islands</h4>
						<p>
							Crossed Swords: <span>+2%</span>
						</p>
						<p>
							Shield: <span>+2%</span>
						</p>
						<p>
							Dagger: <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="terrain stats-container">
					<div className='image grass'/>
					<div className="stats">
						<h4>Grassy Plains</h4>
						<p>
							Crossed Swords: <span>+2%</span>
						</p>
						<p>
							Shield: <span>+2%</span>
						</p>
						<p>
							Dagger: <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="terrain stats-container">
					<div className='image lowlands'/>
					<div className="stats">
						<h4>Coastal Lowlands</h4>
						<p>
							Crossed Swords: <span>+2%</span>
						</p>
						<p>
							Shield: <span>+2%</span>
						</p>
						<p>
							Dagger: <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="terrain stats-container">
					<div className='image mountains'/>
					<div className="stats">
						<h4>Rugged Mountains</h4>
						<p>
							Crossed Swords: <span>+2%</span>
						</p>
						<p>
							Shield: <span>+2%</span>
						</p>
						<p>
							Dagger: <span>+2%</span>
						</p>
					</div>
				</div>
				<div className="terrain stats-container">
					<div className='image marshes'/>
					<div className="stats">
						<h4>Marshes</h4>
						<p>
							Crossed Swords: <span>+2%</span>
						</p>
						<p>
							Shield: <span>+2%</span>
						</p>
						<p>
							Dagger: <span>+2%</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Terrain
