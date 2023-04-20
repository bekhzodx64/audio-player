import { useHotkeys } from 'react-hotkeys-hook'

import useAudioStore from 'store'

import Wrapper from 'components/layout/Wrapper'
import Layout from 'components/layout/Layout'
import Player from 'components/ui/player'
import Playlist from 'components/ui/playlist'
import AudioPlayer from 'components/components/AudioPlayer'

// import PlaylistCard from './components/ui/playlist/PlaylistCard'

function App() {
	const { playerRef, volume, setVolume } = useAudioStore(
		(state) => state.player
	)

	// const [favorite, setFavorite] = useState(false)
	// const [showPlaylist, setShowPlaylist] = useState(false)
	// const [showFavorites, setShowFavorites] = useState(true)

	// const [tracks] = useState([
	// 	{
	// 		id: 1,
	// 		title: 'Happy',
	// 		author: 'Pharrell Williams',
	// 		track: track2,
	// 		poster: poster1,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Our Destiny Lies Above Us',
	// 		author: 'Hans Zimmer',
	// 		track: track3,
	// 		poster: poster3,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Shaab',
	// 		author: 'DJ Track',
	// 		track: track5,
	// 		poster: poster5,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Friend Like Me',
	// 		author: 'Robin Williams ',
	// 		track: track6,
	// 		poster: poster6,
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'Ice Queen',
	// 		author: 'Within Temptation',
	// 		track: track7,
	// 		poster: poster7,
	// 	},
	// 	{
	// 		id: 6,
	// 		title: 'Sets Go Up',
	// 		author: 'Juvenile',
	// 		track: track8,
	// 		poster: poster8,
	// 	},
	// ])
	// const [activeTrack, setActiveTrack] = useState(tracks[0])

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

	// const togglePlaylist = () => {
	// 	setShowPlaylist(!showPlaylist)
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

			{/* <AnimatePresence>
					{showPlaylist && (
						<motion.div
							initial='hidden'
							animate='visible'
							exit='exit'
							variants={list}
							className='bg-[#ecf0f3] flex flex-col p-5 drop-shadow-md gap-3 relative z-10 h-full overflow-y-auto'
						>
							{playlist.map((item) => (
								<PlaylistCard
									key={item.id}
									item={item}
									audioRef={audioRef}
									activeTrack={activeTrack}
									isPlaying={isPlaying}
									setIsPlaying={setIsPlaying}
									setCurrentTime={setCurrentTime}
									setActiveTrack={setActiveTrack}
								/>
							))}
						</motion.div>
					)}
				</AnimatePresence> */}
		</Wrapper>
	)
}

export default App
