import { useState } from 'react'
import { motion } from 'framer-motion'

import { MdOutlineFavoriteBorder } from 'react-icons/md'

import Disc from '../../../assets/disc.png'

const listItem = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -50 },
}

const formatTime = (time) => {
	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0')
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0')
	return `${minutes}:${seconds}`
}

const PlaylistCard = ({
	item,
	activeTrack,
	setActiveTrack,
	setCurrentTime,
	isPlaying,
	setIsPlaying,
	audioRef,
}) => {
	const [duration, setDuration] = useState(0)

	const clickHandler = () => {
		const audio = new Audio(item)
		audioRef.current = audio
		setActiveTrack(item)

		if (isPlaying) {
			setIsPlaying(false)
			audio.pause()
		} else {
			setIsPlaying(true)
			audio.play()
		}

		if (activeTrack.id !== item.id) {
			setCurrentTime(0)
			setIsPlaying(true)
		}
	}

	return (
		<motion.div
			variants={listItem}
			className={`flex items-center justify-between gap-2 px-4 py-3 cursor-pointer select-none drop-shadow-sm rounded-xl bg-slate-100 ${
				activeTrack.id === item.id
					? 'shadow-md shadow-[#a435f0]/40 scale-105'
					: ''
			}`}
			onClick={clickHandler}
		>
			<button
				type='button'
				className='hover:text-[#d11514] transition'
			>
				<MdOutlineFavoriteBorder />
			</button>

			<div className='overflow-hidden rounded-full pointer-events-none select-none h-[35px] w-[35px] flex-shrink-0'>
				<img
					src={item.poster}
					alt=''
					className='object-cover w-full h-full'
				/>
			</div>
			<div className='basis-full'>
				<h2 className='text-sm font-bold line-clamp-1'>{item.title}</h2>
				<p className='text-xs line-clamp-2'>{item.author}</p>
			</div>

			{activeTrack.id === item.id && isPlaying && (
				<svg
					id='equalizer'
					width='40px'
					height='28px'
					viewBox='0 0 10 7'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g fill='#a435f0'>
						<rect
							id='bar1'
							transform='translate(0.500000, 6.000000) rotate(180.000000) translate(-0.500000, -6.000000) '
							x='0'
							y='5'
							width='1'
							height='2px'
						></rect>
						<rect
							id='bar2'
							transform='translate(3.500000, 4.500000) rotate(180.000000) translate(-3.500000, -4.500000) '
							x='3'
							y='2'
							width='1'
							height='5'
						></rect>
						<rect
							id='bar3'
							transform='translate(6.500000, 3.500000) rotate(180.000000) translate(-6.500000, -3.500000) '
							x='6'
							y='0'
							width='1'
							height='7'
						></rect>
						<rect
							id='bar4'
							transform='translate(9.500000, 5.000000) rotate(180.000000) translate(-9.500000, -5.000000) '
							x='9'
							y='3'
							width='1'
							height='4'
						></rect>
					</g>
				</svg>
			)}

			<div className='text-xs text-[#97999a]'>{formatTime(duration)}</div>

			<audio
				preload='auto'
				onCanPlay={(e) => setDuration(e.target.duration)}
			>
				<source
					src={item.track}
					type='audio/mpeg'
				/>
			</audio>
		</motion.div>
	)
}

export default PlaylistCard
