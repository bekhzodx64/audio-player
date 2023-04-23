import useAudioStore from 'store'

const ControlButton = ({ icon, onClick, role }) => {
	const { loop } = useAudioStore((state) => state.player)
	const { isOpen } = useAudioStore((state) => state.playlist)

	const loopTrigger = loopState(role, loop)
	const playlistTrigger = playlistState(role, isOpen)

	return (
		<button
			type='button'
			className={`rounded-full text-[#6f6869] drop-shadow border w-10 h-10 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition duration-150 select-none cursor-pointer active:translate-y-[2px] ${loopTrigger} ${playlistTrigger}`}
			onClick={onClick}
		>
			{icon}
		</button>
	)
}

export default ControlButton

function loopState(role, loop) {
	return role === 'loop' && loop
		? 'shadow-inner translate-y-[2px] drop-shadow-none'
		: ''
}

function playlistState(role, isOpen) {
	return role === 'playlist' && isOpen
		? 'shadow-inner translate-y-[2px] drop-shadow-none'
		: ''
}
