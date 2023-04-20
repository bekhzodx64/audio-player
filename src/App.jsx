// import { useEffect, useRef, useState } from 'react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useHotkeys } from 'react-hotkeys-hook'
// import { motion, AnimatePresence } from 'framer-motion'

import useAudioStore from 'store'

import Wrapper from 'components/layout/Wrapper'
import Layout from 'components/layout/Layout'
import Player from 'components/ui/player'
import AudioPlayer from 'components/components/AudioPlayer'

// import PlaylistCard from './components/ui/playlist/PlaylistCard'

// import { BiShuffle, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
// import { BsPauseFill, BsPlayFill, BsHeartbreakFill } from 'react-icons/bs'
// import {
// 	IoVolumeHigh,
// 	IoVolumeLow,
// 	IoVolumeMedium,
// 	IoVolumeMute,
// } from 'react-icons/io5'
// import { MdFavorite } from 'react-icons/md'
// import { RiPlayListFill } from 'react-icons/ri'

// import track2 from './assets/tracks/track2.mp3'
// import track3 from './assets/tracks/track3.mp3'
// import track5 from './assets/tracks/track5.mp3'
// import track6 from './assets/tracks/track6.mp3'
// import track7 from './assets/tracks/track7.mp3'
// import track8 from './assets/tracks/track8.mp3'

// import poster1 from './assets/posters/happy.jpg'
// import poster3 from './assets/posters/interstellar.png'
// import poster5 from './assets/posters/shaab.jpg'
// import poster6 from './assets/posters/aladdin.jpg'
// import poster7 from './assets/posters/icequeen.jpg'
// import poster8 from './assets/posters/mostwanted.jpg'

// const formatTime = (time) => {
// 	const minutes = Math.floor(time / 60)
// 		.toString()
// 		.padStart(2, '0')
// 	const seconds = Math.floor(time % 60)
// 		.toString()
// 		.padStart(2, '0')
// 	return `${minutes}:${seconds}`
// }

// const playlist = [
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
// ]

// const list = {
// 	visible: {
// 		x: 0,
// 		transition: {
// 			when: 'beforeChildren',
// 			staggerChildren: 0.2,
// 		},
// 	},
// 	hidden: {
// 		x: '-100%',
// 	},
// 	exit: {
// 		opacity: 0,
// 		x: '-80%',
// 		transition: {
// 			duration: 0.3,
// 		},
// 	},
// }

function App() {
	const store = useAudioStore((state) => state.player)
	console.log('🪲 ~ file: App.jsx:117 ~ App ~ store:', store)

	// const audioRef = useRef()

	// const [favorite, setFavorite] = useState(false)

	// const [isPlaying, setIsPlaying] = useState(false)
	// const [volume, setVolume] = useState(1)

	// const [fullDuration, setFullDuration] = useState(0)
	// const [currentTime, setCurrentTime] = useState(0)

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

	// const toggleFavorite = () => {
	// 	setFavorite(!favorite)
	// 	if (!favorite) toast.success('Added to favorites!')
	// 	if (favorite) toast.error('Removed from favorites!')
	// }

	// const togglePlay = () => {
	// 	const audio = audioRef.current

	// 	if (isPlaying) {
	// 		audio.pause()
	// 		setIsPlaying(false)
	// 	} else {
	// 		audio.play()
	// 		setIsPlaying(true)
	// 	}
	// }

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

	// const toggleMute = () => {
	// 	if (volume) {
	// 		setVolume(0)
	// 		return (audioRef.current.volume = 0)
	// 	} else {
	// 		setVolume(1)
	// 		audioRef.current.volume = 1
	// 	}
	// }

	// const togglePlaylist = () => {
	// 	setShowPlaylist(!showPlaylist)
	// }

	// const volumeChangeHandler = (event) => {
	// 	setVolume(+event.target.value)

	// 	return (audioRef.current.volume = +event.target.value)
	// }

	// const changeTimeHandler = (e) => {
	// 	return (audioRef.current.currentTime = e.target.valueAsNumber)
	// }

	// const getTimelineBg = () => {
	// 	return { backgroundSize: `${(currentTime / fullDuration) * 100}% 100%` }
	// }

	// const getVolumeBg = () => {
	// 	return { backgroundSize: `${(volume / 1) * 100}% 100%` }
	// }

	// useHotkeys('KeyM', () => {
	// 	if (volume) {
	// 		setVolume(0)
	// 		return (audioRef.current.volume = 0)
	// 	}

	// 	if (!volume) {
	// 		setVolume(1)
	// 		return (audioRef.current.volume = 1)
	// 	}
	// })

	// const volumeBarIcons = () => {
	// 	switch (true) {
	// 		case volume < 0.1:
	// 			return <IoVolumeMute className='text-2xl text-[#6f6869]' />

	// 		case volume >= 0.1 && volume <= 0.3:
	// 			return <IoVolumeLow className='text-2xl text-[#6f6869]' />

	// 		case volume >= 0.4 && volume <= 0.7:
	// 			return <IoVolumeMedium className='text-2xl text-[#6f6869]' />

	// 		default:
	// 			return <IoVolumeHigh className='text-2xl text-[#6f6869]' />
	// 	}
	// }

	return (
		<Wrapper>
			<Layout>
				<Player />
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

			{/* <div className='bg-[#ecf0f3] px-10 py-14 drop-shadow-md flex gap-8 col-span-2 col-start-2 relative z-20'>
					<div className='basis-11/12'>
						<div className='relative overflow-hidden rounded-full ring-8 ring-white drop-shadow-lg'>
							<img
								src={activeTrack && activeTrack.poster}
								alt='disc'
								className={`w-full h-full object-cover aspect-square pointer-events-none select-none  ${
									isPlaying ? 'animate-spin-slow' : ''
								}`}
								draggable={false}
							/>

							<div className='absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full ring-white/80 ring-8 top-1/2 left-1/2'>
								<div className='absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 top-1/2 left-1/2'></div>
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-5 basis-full'>
						<div className='flex flex-col items-center gap-1'>
							<h1 className='text-[#6f6f6d] text-3xl font-bold line-clamp-1'>
								{activeTrack && activeTrack.title}
							</h1>
							<div className='flex items-baseline justify-center gap-5'>
								<p className='text-[#6c6b6c] font-semibold text-base'>
									{activeTrack && activeTrack.author}
								</p>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<button
								type='button'
								className={`rounded-full drop-shadow-sm border w-14 h-14 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition select-none cursor-pointer ${
									favorite ? 'shadow-inner' : ''
								}`}
								onClick={toggleFavorite}
							>
								<p
									className={`${
										favorite ? 'text-[#d11514]' : 'text-[#6f6869]'
									} transition`}
								>
									<MdFavorite className='text-3xl' />
								</p>
							</button>
							<button
								type='button'
								className='rounded-full drop-shadow-sm border w-14 h-14 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition select-none cursor-pointer'
								onClick={playPrevTrack}
							>
								<p className='text-[#6f6869]'>
									<BiSkipPrevious className='text-5xl' />
								</p>
							</button>
							<button
								type='button'
								className={`rounded-full drop-shadow-sm border w-14 h-14 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition select-none cursor-pointer ${
									isPlaying ? 'shadow-inner' : ''
								}`}
								onClick={togglePlay}
							>
								<p className='text-[#6f6869]'>
									{isPlaying ? (
										<BsPauseFill className='text-4xl' />
									) : (
										<BsPlayFill className='text-4xl' />
									)}
								</p>
							</button>
							<button
								type='button'
								className='rounded-full drop-shadow-sm border w-14 h-14 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition select-none cursor-pointer'
								onClick={playNextTrack}
							>
								<p className='text-[#6f6869]'>
									<BiSkipNext className='text-5xl' />
								</p>
							</button>
						</div>

						<div className='flex flex-col gap-1'>
							<div className='flex items-baseline justify-between text-sm text-[#97999a] font-semibold'>
								<p>{formatTime(currentTime)}</p>
								<p>{formatTime(fullDuration)}</p>
							</div>

							<div className='slider'>
								<input
									type='range'
									min={0}
									max={Math.floor(fullDuration)}
									step={0.1}
									className='w-full inner-shadow'
									value={currentTime}
									onChange={(e) => changeTimeHandler(e)}
									style={getTimelineBg()}
								/>
							</div>
						</div>

						<div className='flex justify-between'>
							<div className='flex items-center gap-3 volume'>
								<button
									type='button'
									className='rounded-full w-10 h-10 drop-shadow-sm border bg-[#ebeff3] flex items-center justify-center transition'
									onClick={toggleMute}
								>
									{volumeBarIcons()}
								</button>

								<input
									type='range'
									min='0'
									max='1'
									step='0.1'
									value={volume}
									onChange={volumeChangeHandler}
									className='shadow-inner'
									style={getVolumeBg()}
								/>
							</div>

							<div className='flex items-center gap-3'>
								<button
									type='button'
									className='rounded-full w-10 h-10 drop-shadow-sm border bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition select-none cursor-pointer'
								>
									<BiShuffle className='text-2xl text-[#6f6869]' />
								</button>

								<button
									type='button'
									className={`rounded-full w-10 h-10 drop-shadow-sm border bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition select-none cursor-pointer ${
										showPlaylist ? 'shadow-inner' : ''
									}`}
									onClick={togglePlaylist}
								>
									<RiPlayListFill className='text-2xl text-[#6f6869]' />
								</button>
							</div>
						</div>

						<audio
							ref={audioRef}
							key={activeTrack.id}
							volume={volume}
							preload='auto'
							onCanPlay={(e) => setFullDuration(e.target.duration)}
							onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
							onEnded={() => setIsPlaying(false)}
						>
							<source
								src={activeTrack.track}
								type='audio/mpeg'
							/>
						</audio>
					</div>
				</div> */}

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
