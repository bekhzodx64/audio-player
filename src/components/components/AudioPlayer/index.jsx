import { useRef } from 'react'

import useAudioStore from 'store'

import track1 from 'assets/tracks/track2.mp3'

const AudioPlayer = () => {
	const audioRef = useRef()

	const saveAudioRefToStore = useAudioStore(
		(state) => state.player.saveAudioRefToStore
	)

	const handleAudioLoad = () => {
		saveAudioRefToStore(audioRef)
	}

	return (
		<>
			<audio
				ref={audioRef}
				// key={activeTrack.id}
				// volume={volume}
				preload='auto'
				onLoadedData={handleAudioLoad}
				// onCanPlay={(e) => setFullDuration(e.target.duration)}
				// onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
				// onEnded={() => setIsPlaying(false)}
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
