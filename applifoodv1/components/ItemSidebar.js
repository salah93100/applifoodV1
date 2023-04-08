import Link from "next/link"

const ItemSidebar=({target,itemName,Icon})=> {
  return (<li className='flex hover:bg-[#E5E9F2] rounded p-2'>
    <Link href={target} className="flex items-center gap-2 text-[16px] "><Icon size={20}/><span className="font-semibold">{itemName}</span></Link>
  
    </li>
  )
}
export default ItemSidebar 