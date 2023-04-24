import { motion, AnimatePresence } from 'framer-motion'
import useAudioStore from 'store'

import PlaylistCard from './PlaylistCard'

const Playlist = () => {
	const { isOpen, tracks } = useAudioStore((state) => state.playlist)

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{
						opacity: 0,
						paddingLeft: 0,
						paddingRight: 0,
						width: 0,
						overflow: 'hidden',
					}}
					animate={{
						opacity: 1,
						paddingLeft: 20,
						paddingRight: 20,
						width: '100%',
						overflowY: 'auto',
					}}
					exit={{
						opacity: 0,
						paddingLeft: 0,
						paddingRight: 0,
						width: 0,
						overflow: 'hidden',
					}}
					className='bg-[#ecf0f3] flex flex-col p-5 drop-shadow-md gap-3 relative z-10 h-full'
				>
					{tracks.map((track) => (
						<PlaylistCard
							key={track.id}
							{...{ track }}
						/>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Playlist
