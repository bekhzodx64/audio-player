import Equalizer from 'components/components/Equalizer'

import { MdOutlineFavoriteBorder } from 'react-icons/md'

// const listItem = {
// 	visible: { opacity: 1, y: 0 },
// 	hidden: { opacity: 0, y: -50 },
// }

const PlaylistCard = () => {
	// const clickHandler = () => {
	// 	const audio = new Audio(item)
	// 	audioRef.current = audio
	// 	setActiveTrack(item)

	// 	if (isPlaying) {
	// 		setIsPlaying(false)
	// 		audio.pause()
	// 	} else {
	// 		setIsPlaying(true)
	// 		audio.play()
	// 	}

	// 	if (activeTrack.id !== item.id) {
	// 		setCurrentTime(0)
	// 		setIsPlaying(true)
	// 	}
	// }

	return (
		<div
			// variants={listItem}
			className='flex items-center justify-between gap-2 px-4 py-3 cursor-pointer select-none drop-shadow-sm rounded-xl bg-slate-100'
			// onClick={clickHandler}
		>
			<button
				type='button'
				className='hover:text-[#d11514] transition'
			>
				<MdOutlineFavoriteBorder />
			</button>

			<div className='overflow-hidden rounded-full pointer-events-none select-none h-[35px] w-[35px] flex-shrink-0'>
				{/* <img
					src={item.poster}
					alt=''
					className='object-cover w-full h-full'
				/> */}
			</div>
			<div className='basis-full'>
				<h2 className='text-sm font-bold line-clamp-1'>title</h2>
				<p className='text-xs line-clamp-2'>author</p>
			</div>

			<Equalizer />

			<div className='text-xs font-light text-[#97999a]'>2:23</div>

			<audio
				preload='auto'
				// onCanPlay={(e) => setDuration(e.target.duration)}
			>
				<source
					// src={item.track}
					type='audio/mpeg'
				/>
			</audio>
		</div>
	)
}

export default PlaylistCard
