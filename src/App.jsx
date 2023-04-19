import { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import { motion, AnimatePresence } from 'framer-motion'

import Wrapper from './components/layout/wrapper'

import { BiShuffle, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import {
	IoVolumeHigh,
	IoVolumeLow,
	IoVolumeMedium,
	IoVolumeMute,
} from 'react-icons/io5'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiPlayListFill } from 'react-icons/ri'
import Disc from './assets/disc.png'
import sound from './assets/track4.mp3'

const formatTime = (time) => {
	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0')
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0')
	return `${minutes}:${seconds}`
}

const playlist = [
	{
		id: 1,
		title: 'test',
		artist: 'test',
		album: 'test',
		cover: 'test',
	},
	{
		id: 2,
		title: 'test',
		artist: 'test',
		album: 'test',
		cover: 'test',
	},
	{
		id: 3,
		title: 'test',
		artist: 'test',
		album: 'test',
		cover: 'test',
	},
	{
		id: 4,
		title: 'test',
		artist: 'test',
		album: 'test',
		cover: 'test',
	},
]

const list = {
	visible: {
		x: 0,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	hidden: {
		x: '-100%',
	},
	exit: {
		opacity: 0,
		x: '-80%',
		transition: {
			duration: 0.3,
		},
	},
}

const listItem = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -50 },
}

function App() {
	const audioRef = useRef()

	const [favorite, setFavorite] = useState(false)

	const [isPlaying, setIsPlaying] = useState(false)
	const [muted, setMuted] = useState(false)
	const [volume, setVolume] = useState(1)

	const [fullDuration, setFullDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)

	const [showPlaylist, setShowPlaylist] = useState(false)

	const toggleFavorite = () => {
		setFavorite(!favorite)
		if (!favorite) toast.success('Added to favorites!')
		if (favorite) toast.error('Removed from favorites!')
	}

	const togglePlay = () => {
		const audio = audioRef.current

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play()
			setIsPlaying(true)
		}
	}

	const togglePlaylist = () => {
		setShowPlaylist(!showPlaylist)
	}

	const volumeChangeHandler = (event) => {
		setVolume(+event.target.value)

		return (audioRef.current.volume = +event.target.value)
	}

	const changeTimeHandler = (e) => {
		// setCurrentTime(e.target.valueAsNumber)
		return (audioRef.current.currentTime = e.target.valueAsNumber)
	}

	const getTimelineBg = () => {
		return { backgroundSize: `${(currentTime / fullDuration) * 100}% 100%` }
	}

	const getVolumeBg = () => {
		return { backgroundSize: `${(volume / 1) * 100}% 100%` }
	}

	// FIXME: need to change logic!!!
	// useHotkeys('Space', () => {
	// 	const audio = audioRef.current
	// 	if (isPlaying) {
	// 		// audio.pause()
	// 		setIsPlaying(false)
	// 	} else {
	// 		// audio.play()
	// 		setIsPlaying(true)
	// 	}
	// })

	useHotkeys('KeyM', () => {
		setMuted(!muted)

		if (!muted) {
			setVolume(0)
			return
		}

		if (muted) {
			setVolume(1)
			return
		}
	})

	const volumeBarIcons = () => {
		switch (true) {
			case volume < 0.1:
				return <IoVolumeMute className='text-2xl text-[#6f6869]' />

			case volume >= 0.1 && volume <= 0.3:
				return <IoVolumeLow className='text-2xl text-[#6f6869]' />

			case volume >= 0.4 && volume <= 0.7:
				return <IoVolumeMedium className='text-2xl text-[#6f6869]' />

			default:
				return <IoVolumeHigh className='text-2xl text-[#6f6869]' />
		}
	}

	useEffect(() => {
		if (volume === 0) {
			setMuted(true)
			return
		}

		if (volume >= 0.1) {
			setMuted(false)
			return
		}
	}, [volume])

	return (
		<Wrapper>
			<Toaster
				position='bottom-right'
				reverseOrder={false}
				toastOptions={{
					duration: 1000,
				}}
			/>

			<div className='container grid grid-cols-4 gap-5'>
				<div className='bg-[#ecf0f3] px-10 py-14 drop-shadow-md flex gap-8 col-span-2 col-start-2 relative z-20'>
					<div className='basis-11/12'>
						<div className='aspect-square rounded-full overflow-hidden ring-8 ring-[#ebeff3] drop-shadow-lg'>
							<img
								src={Disc}
								alt='disc'
								className={`w-full h-full object-scale-down pointer-events-none select-none  ${
									isPlaying ? 'animate-spin-slow' : ''
								}`}
								draggable={false}
							/>
						</div>
					</div>

					<div className='flex flex-col gap-5 basis-full'>
						<div className='flex flex-col items-center gap-1'>
							<h1 className='text-[#6f6f6d] text-3xl font-bold line-clamp-1'>
								DJ Track - Shaab
							</h1>
							<div className='flex items-baseline justify-center gap-5'>
								<p className='text-[#6c6b6c] font-semibold text-base'>
									Red Hot Chill Peppers
								</p>
								<p className='text-[#78797b] text-sm'>Stadium Arcadium</p>
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
							muted={muted}
							volume={volume}
							preload='auto'
							onCanPlay={(e) => setFullDuration(e.target.duration)}
							onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
							onEnded={() => setIsPlaying(false)}
						>
							<source
								src={sound}
								type='audio/mpeg'
							/>
						</audio>
					</div>
				</div>

				<AnimatePresence>
					{showPlaylist && (
						<motion.div
							initial='hidden'
							animate='visible'
							exit='exit'
							variants={list}
							className='bg-[#ecf0f3] flex flex-col p-5 drop-shadow-md gap-3 relative z-10'
						>
							{playlist.map((item) => (
								<motion.div
									variants={listItem}
									className='flex items-center justify-between gap-2 px-4 py-3 cursor-pointer drop-shadow-sm rounded-xl bg-slate-100 hover:scale-105 will-change-auto hover:shadow-md'
								>
									<button
										type='button'
										className='hover:text-[#d11514] transition'
									>
										<MdOutlineFavoriteBorder />
									</button>

									<div className='w-10 h-10 pointer-events-none select-none aspect-square'>
										<img
											src={Disc}
											alt=''
											className='object-scale-down w-full h-full'
										/>
									</div>
									<div className='basis-full'>
										<h2 className='text-sm font-bold line-clamp-1'>
											DJ Track - Shaab
										</h2>
										<p className='text-xs line-clamp-2'>
											Red Hot Chill Peppers Stadium Arcadium
										</p>
									</div>

									<div className='text-xs text-[#97999a]'>2:25</div>
								</motion.div>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</Wrapper>
	)
}

export default App
