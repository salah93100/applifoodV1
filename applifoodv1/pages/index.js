import Head from 'next/head';
import UserRestaurant from '../components/UserRestaurant'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Orders from '../components/Order'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Applifood</title>
        
       </Head>
       
        <div className="flex w-full text-[#42526E] h-full">
      
      <div className='flex-4 bg-[#F8F9FB] border border-r-[#E5E9F2] h-screen  w-64 fixed'>
        <UserRestaurant/>
     <Sidebar/>
     </div>
     <div className='flex-1 sticky ml-64 items-center '>
        <Topbar/>
        <Orders/>
     </div>
    </div>
   
 </div>
  )
}