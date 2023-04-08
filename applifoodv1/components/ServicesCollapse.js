import Image from 'next/image'
import ButtonWithIcon from './ButtonWithIcon'
import { MdModeEditOutline} from "react-icons/md";

const ServicesCollapse =({img,text,openServicesModal})=>{

    return(
     <div className="flex flex-row gap-2 items-center justify-between w-full bg-[#fff] py-2 border-l px-1 ">
        <div className='flex'>
        <div>
        <Image
        src={""}
        alt="Uber Image"
        />
        </div>

       <p>{text}</p>  
       </div>  
       <div className='flex'>
       <ButtonWithIcon text={"Modifier"} Icon={MdModeEditOutline} onClick={openServicesModal}/>
       
       </div>
     </div>
    
    )
      
    
    }
    
    export default ServicesCollapse 