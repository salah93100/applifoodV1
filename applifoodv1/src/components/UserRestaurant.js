import React from 'react'

export default function UserRestaurant({src,alt,nameRestaurant}) {
  return (
    <div className='w-64 px-4 pb-4 flex flex-col gap-4'>
    <div className=' reative h-36 justify-center'>
    <img src="images/logo-dyd.svg" alt="" className='object-cover'/>
    </div>
    <div className='text-center'>
        <p className='font-semibold uppercase'>ID: Cofood</p>
    </div>
    </div>
  )
}
