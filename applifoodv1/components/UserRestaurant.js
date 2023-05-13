import Image from "next/image"

export default function UserRestaurant({src,alt,nameRestaurant}) {
  return (
    <div className='w-64 px-4 pb-4 flex flex-col gap-4 mt-4'>
    <div className='reative h-36 flex justify-center items-center p-4'>
    <Image 
      src={src}  
      alt="Picture of your account"
      width={150}
      height={150}
      className=''/>
      </div>
    <div className='text-center'>
        <p className='font-semibold uppercase'>ID: Delicious</p>
    </div>
    </div>
  )
}
