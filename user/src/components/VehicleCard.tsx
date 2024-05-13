import civic from '../assets/civic.jpg'

const VehicleCard = () => {
  return (
    <div 
        className='min-w-[210px] bg-white w-[230px] overflow-hidden rounded-xl border-[1px] border-gray-200
        shadow-sm cursor-pointer'
    >
      <div className="h-[140px]">
        <img src={civic} alt="" className='w-full h-full object-cover' />
      </div>

      <div className="py-2 px-3">
        <div className="">
            <h2 className='text-lg font-medium'>Honda Civic 2019</h2>

            <p className='text-xs text-gray-500'>1500 CC - 5 Seater</p>

            <h1 className='text-xl font-bold'>2500</h1>
        </div>

        <div className="mt-1 border-t-[1px] pt-2 border-gray-300">
            <p className='text-xs font-medium text-gray-600'>T Ashwin</p>

            <div className="">
                {/* stars */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard
