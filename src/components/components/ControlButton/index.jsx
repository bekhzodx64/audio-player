const ControlButton = ({ icon }) => {
	return (
		<button
			type='button'
			className='rounded-full text-[#6f6869] drop-shadow border w-10 h-10 bg-[#ebeff3] flex items-center justify-center active:shadow-inner active:drop-shadow-none transition duration-150 select-none cursor-pointer active:translate-y-[2px]'
		>
			{icon}
		</button>
	)
}

export default ControlButton
