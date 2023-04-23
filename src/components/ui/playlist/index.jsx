import { motion, AnimatePresence } from 'framer-motion'
import useAudioStore from 'store'

import PlaylistCard from './PlaylistCard'

const Playlist = () => {
	const { isOpen } = useAudioStore((state) => state.playlist)

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{
						opacity: 0,
						width: 0,
						overflow: 'hidden',
					}}
					animate={{
						opacity: 1,
						width: '100%',
						overflowY: 'auto',
					}}
					exit={{ opacity: 0, width: 0, overflow: 'hidden' }}
					className='bg-[#ecf0f3] flex flex-col p-5 drop-shadow-md gap-3 relative z-10 h-full overflow-y-auto'
				>
					<PlaylistCard />
				</motion.div>
			)}

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
