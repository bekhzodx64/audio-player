import useAudioStore from 'store'

import PlayerButton from 'components/components/PlayerButton'

import { MdFavorite } from 'react-icons/md'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'

const PlayerButtons = () => {
	const { isPlaying, togglePlay } = useAudioStore((state) => state.player)

	return (
		<div className='flex items-center justify-between'>
			<PlayerButton icon={<MdFavorite size={30} />} />
			<PlayerButton icon={<BiSkipPrevious size={48} />} />
			<PlayerButton
				isPlaying={isPlaying}
				role='main'
				icon={isPlaying ? <BsPauseFill size={36} /> : <BsPlayFill size={36} />}
				onClick={togglePlay}
			/>
			<PlayerButton icon={<BiSkipNext size={48} />} />
		</div>
	)
}

export default PlayerButtons
