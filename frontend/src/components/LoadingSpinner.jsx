const LoadingSpinner = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-[#FEE2E2]'>
			<div className='relative'>
				<div className='w-20 h-20 border-[#FED7C3] border-2 rounded-full' />
				<div className='w-20 h-20 border-[#E09AAE] border-t-2 animate-spin rounded-full absolute left-0 top-0' />
				<div className='sr-only'>Loading</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
