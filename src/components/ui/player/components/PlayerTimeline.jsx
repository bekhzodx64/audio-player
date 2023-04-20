import useAudioStore from 'store'

import { formatTime } from 'helpers/functions'

const PlayerTimeline = () => {
	const { duration, currentTime, playerRef } = useAudioStore(
		(state) => state.player
	)

	const updatePlaybackTime = (event) => {
		playerRef.currentTime = event.target.valueAsNumber
	}

	const getAudioBackground = () => {
		return { backgroundSize: `${(currentTime / duration) * 100}% 100%` }
	}

	return (
		<div className='flex flex-col'>
			<div className='flex items-baseline justify-between text-sm text-[#97999a] font-light leading-tight'>
				<p>{formatTime(currentTime)}</p>
				<p>{formatTime(duration)}</p>
			</div>

			<div className='slider'>
				<input
					min={0}
					step={0.1}
					type='range'
					value={currentTime}
					max={Math.floor(duration)}
					className='w-full inner-shadow'
					onChange={(e) => updatePlaybackTime(e)}
					style={getAudioBackground()}
				/>
			</div>
		</div>
	)
}

export default PlayerTimeline
