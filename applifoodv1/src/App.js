import './App.css';
import Sidebar from './components/Sidebar';
import UserRestaurant from './components/UserRestaurant';
function App() {
  return (
    <div className="flex">
      <div className='flex-4 bg-[#F8F9FB] border border-r-[#E5E9F2] h-screen text-[#42526E] w-64'>
        <UserRestaurant/>
     <Sidebar/>
     </div>
     <div className='flex-1'>
    
     </div>
    </div>
  );
}

export default App;
