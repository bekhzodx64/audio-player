import useAudioStore from 'store'

const ControlButton = ({ icon, onClick, role }) => {
	const { loop, volume } = useAudioStore((state) => state.player)

	const loopTrigger = loopState(role, loop)

	return (
		<button
			type='button'
			className={`rounded-full text-[#6f6869] drop-shadow border w-10 h-10 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition duration-150 select-none cursor-pointer active:translate-y-[2px] ${loopTrigger}`}
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
