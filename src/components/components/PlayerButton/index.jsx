const PlayerButton = ({ icon, onClick, isPlaying, role }) => {
	const playTrigger = playState(role, isPlaying)

	return (
		<button
			type='button'
			className={`rounded-full drop-shadow border w-14 h-14 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition duration-150 select-none cursor-pointer active:translate-y-[2px] ${playTrigger}`}
			onClick={onClick}
		>
			<p className='transition text-[#6f6869]'>{icon}</p>
		</button>
	)
}

export default PlayerButton

function playState(role, isPlaying) {
	return role === 'main' && isPlaying
		? 'shadow-inner translate-y-[2px] drop-shadow-none'
		: ''
}
