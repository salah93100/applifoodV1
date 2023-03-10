
const ItemSidebar=({target,itemName,Icon})=> {
  return (<li className='flex hover:bg-[#E5E9F2] rounded p-2'>
    <a href={target} className="flex items-center gap-2 text-[16px] "><Icon size={20}/><span className="font-semibold">{itemName}</span></a>
  
    </li>
  )
}
export default ItemSidebar 