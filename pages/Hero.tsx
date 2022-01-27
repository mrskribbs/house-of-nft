import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Hero: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1>
				Fine Art,
				<span>Cultural Exploration,</span>
				Technological Innovation.
			</h1>
			<p>We are Wisdom, We are Culture, We are United, and We are The House.</p>

			<div className="actions">
				<a href="">Join Discord</a>
				<a href="">Follow Twitter</a>
			</div>
		</div>
	)
}

export default Hero
