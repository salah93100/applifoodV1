
import UserRestaurant from './UserRestaurant';
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import MenuPage from './MenuCompoment';
import profilePic from  '../public/images/cofoodLogo.jpeg'

const DashboardUI = ({children }) => {

    return (
        <div className="flex w-full text-[#42526E] h-full">
      
        <div className='flex-4 bg-[#F8F9FB] border border-r-[#E5E9F2] h-screen  w-64 fixed'>
          <UserRestaurant src={profilePic}/>
       <Sidebar/>
       </div>
       <div className='flex-1 sticky ml-64 items-center '>
          <Topbar/>
          {children }
         
       </div>
      </div>
  
    )
  
  
  }
  
  export default DashboardUI 