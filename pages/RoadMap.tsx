import type { NextPage } from 'next'

const RoadMap: NextPage = () => {
	return (
		<div className="roadmap-container">
			<h2>
				Roadmap <span>Q1</span>
			</h2>
			<div className="sword-container">
			<img className='sword full' src="/assets/roadmap/full-sword.png" />
				<img className="sword top" src="/assets/roadmap/top-sword.png" />
				<img className="sword bottom" src="/assets/roadmap/bottom-sword.png" />
			</div>{' '}
		</div>
	)
}

export default RoadMap
