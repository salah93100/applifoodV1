import React from 'react'
import ItemSidebar from './ItemSidebar';

import { MdRestaurantMenu,MdStore,MdReceiptLong,MdDashboardCustomize,MdOutlineSettings } from "react-icons/md";


const Sidebar=({children})=> {
  return (
    <nav className='w-64 p-4 border border-y-[#E5E9F2]'>
        <ul className='flex flex-col gap-2 m-0 p-0'> 
            <ItemSidebar target="/" itemName="Orders"  Icon={MdReceiptLong}/>
            <ItemSidebar target="/" itemName="Location" Icon={MdStore}/>
            <ItemSidebar target="/" itemName="Menus" Icon={MdRestaurantMenu}/>
            <ItemSidebar target="/" itemName="Integration" Icon={MdDashboardCustomize}/>
            <ItemSidebar target="/" itemName="Settings" Icon={MdOutlineSettings}/>
        </ul>
    </nav>
  )
}
export default Sidebar 