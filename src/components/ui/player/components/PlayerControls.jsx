import useAudioStore from 'store'

import ControlButton from 'components/components/ControlButton'

import {
	IoVolumeHigh,
	IoVolumeLow,
	IoVolumeMedium,
	IoVolumeMute,
} from 'react-icons/io5'
import { RiPlayListLine } from 'react-icons/ri'
import { BsShuffle } from 'react-icons/bs'
import { TfiLoop } from 'react-icons/tfi'

const PlayerControls = () => {
	const { toggleLoop, playerRef, volume, toggleMute, setVolume } =
		useAudioStore((state) => state.player)

	const { togglePlaylist } = useAudioStore((state) => state.playlist)

	const volumeBarIcons = volumeFuntion(volume)

	const volumeChangeHandler = (event) => {
		setVolume(+event.target.value)
		return (playerRef.volume = +event.target.value)
	}

	const toggleMuteHandler = () => {
		toggleMute()

		if (volume) {
			playerRef.volume = 0
		} else {
			playerRef.volume = 1
		}
	}

	const getVolumeBg = () => {
		return { backgroundSize: `${(volume / 1) * 100}% 100%` }
	}

	return (
		<div className='flex justify-between'>
			<div className='flex items-center gap-3 volume'>
				<ControlButton
					role='mute'
					onClick={toggleMuteHandler}
					icon={volumeBarIcons()}
				/>

				<input
					min='0'
					max='1'
					step='0.1'
					type='range'
					value={volume}
					style={getVolumeBg()}
					className='w-24 shadow-inner'
					onChange={volumeChangeHandler}
				/>
			</div>

			<div className='flex items-center gap-3'>
				<ControlButton
					role='loop'
					onClick={toggleLoop}
					icon={<TfiLoop size={22} />}
				/>
				<ControlButton icon={<BsShuffle size={22} />} />
				<ControlButton
					role='playlist'
					onClick={togglePlaylist}
					icon={<RiPlayListLine size={22} />}
				/>
			</div>
		</div>
	)
}

export default PlayerControls

function volumeFuntion(volume) {
	return () => {
		switch (true) {
			case volume < 0.1:
				return <IoVolumeMute size={22} />
			case volume >= 0.1 && volume <= 0.3:
				return <IoVolumeLow size={22} />
			case volume >= 0.4 && volume <= 0.7:
				return <IoVolumeMedium size={22} />
			default:
				return <IoVolumeHigh size={22} />
		}
	}
}
