import { AnimatePresence } from 'framer-motion'
import PlaylistCard from './PlaylistCard'

const Playlist = () => {
	return (
		<AnimatePresence>
			<div className='bg-[#ecf0f3] flex flex-col p-5 drop-shadow-md gap-3 relative z-10 h-full overflow-y-auto'>
				<PlaylistCard />
			</div>

			{/* 
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
		 */}
		</AnimatePresence>
	)
}

export default Playlist
