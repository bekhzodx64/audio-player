import { useRef } from 'react'

import useAudioStore from 'store'

import track1 from 'assets/tracks/track5.mp3'

const AudioPlayer = () => {
	const audioRef = useRef()

	const { getPlayerRef, togglePlay, getDuration, getCurrentTime, loop } =
		useAudioStore((state) => state.player)

	return (
		<>
			<audio
				preload='auto'
				ref={audioRef}
				onEnded={togglePlay}
				loop={loop}
				onLoadedData={() => getPlayerRef(audioRef)}
				onCanPlay={(e) => getDuration(e.target.duration)}
				onTimeUpdate={(e) => getCurrentTime(e.target.currentTime)}
				// volume={volume}
				// key={activeTrack.id}
			>
				<source
					// src={activeTrack.track}
					src={track1}
					type='audio/mpeg'
				/>
			</audio>
		</>
	)
}

export default AudioPlayer
