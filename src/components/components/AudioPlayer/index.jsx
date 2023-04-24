import { useRef } from 'react'

import useAudioStore from 'store'

import track1 from 'assets/tracks/track5.mp3'

const AudioPlayer = () => {
	const audioRef = useRef()

	const {
		getPlayerRef,
		togglePlay,
		getDuration,
		getCurrentTime,
		loop,
		autoPlay,
	} = useAudioStore((state) => state.player)

	const { activeTrack } = useAudioStore((state) => state.playlist)

	return (
		<audio
			loop={loop}
			preload='auto'
			ref={audioRef}
			autoPlay={autoPlay}
			key={activeTrack.id}
			onEnded={togglePlay}
			onLoadedData={() => getPlayerRef(audioRef)}
			onCanPlay={(e) => getDuration(e.target.duration)}
			onTimeUpdate={(e) => getCurrentTime(e.target.currentTime)}
		>
			<source
				src={activeTrack ? activeTrack.src : track1}
				type='audio/mpeg'
			/>
		</audio>
	)
}

export default AudioPlayer
