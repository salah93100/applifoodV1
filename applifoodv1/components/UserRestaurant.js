import Image from "next/image"

export default function UserRestaurant({src,alt,nameRestaurant}) {
  return (
    <div className='w-64 px-4 pb-4 flex flex-col gap-4'>
    <div className=' reative h-36 justify-center'>
    <Image 
      src={src}  
      alt="Picture of your account"
      width={500}
      height={500}
      className='object-cover'/>
      </div>
    <div className='text-center'>
        <p className='font-semibold uppercase'>ID: Cofood</p>
    </div>
    </div>
  )
}
