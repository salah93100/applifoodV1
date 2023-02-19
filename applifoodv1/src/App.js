import './App.css';
import Sidebar from './components/Sidebar';
import UserRestaurant from './components/UserRestaurant';
import Topbar from './components/Topbar';
import Orders from './pages/Orders';

function App() {
  return (
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
  );
}

export default App;
