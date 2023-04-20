const PlayerInfo = () => {
	return (
		<div className='flex flex-col items-center gap-1'>
			<h1 className='text-[#6f6f6d] text-3xl font-bold line-clamp-1'>
				Track title
			</h1>
			<div className='flex items-baseline justify-center gap-5'>
				<p className='text-[#6c6b6c] font-semibold text-base'>Track author</p>
			</div>
		</div>
	)
}

export default PlayerInfo
