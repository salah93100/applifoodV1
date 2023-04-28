import Head from 'next/head';
import UserRestaurant from '../components/UserRestaurant'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Orders from '../components/Order'
import Location from '../components/Location';
import MenuPage from '../components/MenuCompoment';
import Link from 'next/link';
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Applifood</title>
        
       </Head>
      <div className='h-screen flex justify-center '>
        <div className="flex flex-col w-full text-[#42526E] h-full justify-center items-center gap-4">
    <p className='text-4xl'>Home Page is building...⏳</p>
    <Link href="/dashboard/orders" className='text-white px-3 py-3 bg-blue-600 rounded hover:bg-white hover:text-blue-600'>Go to the dashboard Applifood</Link>
    </div>
    </div> 
 </div>
  )
}