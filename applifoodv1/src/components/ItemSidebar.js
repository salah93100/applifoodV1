import React from 'react'

const ItemSidebar=({target,itemName,Icon})=> {
  return (<li className='flex hover:bg-slate-400 rounded p-2'>
    <a href={target} className="flex items-center gap-2"><Icon size={20}/>{itemName}</a>
  
    </li>
  )
}
export default ItemSidebar 