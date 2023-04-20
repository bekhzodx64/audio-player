import PlayerDisc from './components/PlayerDisc'
import PlayerWrapper from './components/PlayerWrapper'
import PlayerInfo from './components/PlayerInfo'
import PlayerButtons from './components/PlayerButtons'
import PlayerTimeline from './components/PlayerTimeline'
import PlayerControls from './components/PlayerControls'

const Player = () => {


	return (
		<div className='bg-[#ecf0f3] px-10 py-14 drop-shadow-md flex gap-8 col-start-2 relative z-20 col-span-2'>
			<PlayerDisc />

			<PlayerWrapper>
				<PlayerInfo />
				<PlayerButtons />
				<PlayerTimeline />
				<PlayerControls />
			</PlayerWrapper>
		</div>
	)
}

export default Player
	