import ControlButton from 'components/components/ControlButton'

import {
	IoVolumeMute,
	IoVolumeLow,
	IoVolumeMedium,
	IoVolumeHigh,
} from 'react-icons/io5'
import { BiShuffle } from 'react-icons/bi'
import { RiPlayListFill } from 'react-icons/ri'

const PlayerControls = () => {
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
		<div className='flex justify-between'>
			<div className='flex items-center gap-3 volume'>
				<ControlButton icon={<IoVolumeHigh size={22} />} />

				<input
					type='range'
					min='0'
					max='1'
					step='0.1'
					// value={volume}
					// onChange={volumeChangeHandler}
					className='shadow-inner'
					// style={getVolumeBg()}
				/>
			</div>

			<div className='flex items-center gap-3'>
				<ControlButton icon={<BiShuffle size={22} />} />
				<ControlButton icon={<RiPlayListFill size={22} />} />
			</div>
		</div>
	)
}

export default PlayerControls
