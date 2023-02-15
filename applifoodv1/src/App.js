import './App.css';
import Sidebar from './components/Sidebar';
import UserRestaurant from './components/UserRestaurant';
function App() {
  return (
    <div className="flex">
      <div className='flex-4 bg-slate-200 border border-slate-400 h-screen'>
        <UserRestaurant/>
     <Sidebar/>
     </div>
     <div className='flex-1'>
     <Sidebar/>
     </div>
    </div>
  );
}

export default App;
