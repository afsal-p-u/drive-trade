import React from 'react'

const Sidebar = () => {
  return (
    <div className='min-h-[89vh] min-w-[230px] w-[230px] bg-[#181818] sticky right-0 top-[11vh] z-[990]
    border-r-[1px] shadow-md'>
      <div className="px-[20px] py-5 text-white sticky right-0 top-[11vh]">
        <div className="">
          <p className='mb-1 font-medium'>Transmission</p>

          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" name="" id="" className='cursor-pointer' />

              <p className='text-sm'>Automatic</p>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" name="" id="" className='cursor-pointer' />

              <p className='text-sm'>Manuel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
