import React from 'react'
import { Link } from 'react-router-dom'

import { VehicleCard } from '../components'

const Vehicles = () => {
  return (
    <div className='px-[100px] pt-5 min-h-[100vh]'>
      <div className="">
        <h3 className='text-xl'>Recently added</h3>
        <div className="mt-3 flex gap-3 flex-wrap">
            <Link to="/vehicle" >
              <VehicleCard />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Vehicles
