import { useHotkeys } from 'react-hotkeys-hook'

import useAudioStore from 'store'

import Wrapper from 'components/layout/Wrapper'
import Layout from 'components/layout/Layout'
import Player from 'components/ui/player'
import Playlist from 'components/ui/playlist'
import AudioPlayer from 'components/components/AudioPlayer'

function App() {
	const { playerRef, volume, setVolume } = useAudioStore(
		(state) => state.player
	)

	const test = useAudioStore((state) => state)
	console.log('🪲 ~ file: App.jsx:19 ~ App ~ test:', test.playlist)

	// const playNextTrack = () => {
	// 	if (!isPlaying) setIsPlaying(true)

	// 	const currentIndex = tracks.indexOf(activeTrack)
	// 	const nextIndex = (currentIndex + 1) % tracks.length
	// 	const nextTrack = tracks[nextIndex]
	// 	setActiveTrack(nextTrack)

	// 	const audio = new Audio(nextTrack)
	// 	audioRef.current = audio
	// 	audio.play()
	// }

	// const playPrevTrack = () => {
	// 	if (!isPlaying) setIsPlaying(true)

	// 	const currentIndex = tracks.indexOf(activeTrack)
	// 	const nextIndex = (currentIndex - 1) % tracks.length
	// 	const nextTrack = tracks[nextIndex]
	// 	setActiveTrack(nextTrack)

	// 	const audio = new Audio(nextTrack)
	// 	audioRef.current = audio
	// 	audio.play()
	// }

	useHotkeys('KeyM', () => {
		if (volume) {
			setVolume(0)
			return (playerRef.volume = 0)
		}

		if (!volume) {
			setVolume(1)
			return (playerRef.volume = 1)
		}
	})

	return (
		<Wrapper>
			<Layout>
				{/* <Favorites /> */}
				<Player />
				<Playlist />

				<AudioPlayer />
			</Layout>

			{/* <AnimatePresence>
					{showFavorites && (
						<motion.div
							initial='hidden'
							animate='visible'
							exit='exit'
							variants={list}
							className='bg-[#ecf0f3] flex flex-col p-5 drop-shadow-md gap-3 relative z-10 h-full'
						>
							<div className='relative flex flex-col items-center justify-center h-full gap-4'>
								<h2 className='max-w-[150px] font-bold text-xl text-[#6f6869] text-center'>
									No Data
								</h2>
								<BsHeartbreakFill className='text-[#6f6869]/30 text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
							</div>
						</motion.div>
					)}
				</AnimatePresence> */}
		</Wrapper>
	)
}

export default App
