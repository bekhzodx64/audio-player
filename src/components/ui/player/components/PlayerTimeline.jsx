const PlayerTimeline = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex items-baseline justify-between text-sm text-[#97999a] font-light leading-tight'>
				<p>1:28</p>
				<p>3:45</p>
			</div>

			<div className='slider'>
				<input
					type='range'
					min={0}
					// max={Math.floor(fullDuration)}
					max={100}
					step={0.1}
					className='w-full inner-shadow'
					// value={currentTime}
					// onChange={(e) => changeTimeHandler(e)}
					// style={getTimelineBg()}
				/>
			</div>
		</div>
	)
}

export default PlayerTimeline
