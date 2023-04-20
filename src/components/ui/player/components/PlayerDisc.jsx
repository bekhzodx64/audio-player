import poster1 from 'assets/posters/happy.jpg'

const PlayerDisc = () => {
	return (
		<div className='basis-11/12'>
			<div className='relative overflow-hidden rounded-full ring-8 ring-white drop-shadow-lg aspect-square'>
				<img
					src={poster1}
					alt='track poster'
					className='object-cover w-full h-full pointer-events-none select-none'
					draggable={false}
				/>

				<div className='absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full ring-white/80 ring-[20px] bg-white top-1/2 left-1/2'>
					<div className='absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/80 top-1/2 left-1/2'></div>
				</div>
			</div>
		</div>
	)
}

export default PlayerDisc
