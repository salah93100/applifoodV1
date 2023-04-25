import Image from 'next/image'
import ButtonWithIcon from './ButtonWithIcon'
import { MdModeEditOutline} from "react-icons/md";

const ServicesCollapse =({img,servicesDelivery,openServicesModal})=>{

    return(
     <div className="flex flex-row gap-2 items-center justify-between w-full bg-[#fff] py-2 border-l px-1 ">
        <div className='flex items-center gap-2'>
        <div>
        <Image
        src={servicesDelivery==="Uber"?`../../images/uber-eats.svg`:servicesDelivery==="Deliveroo"?`../../images/deliveroo-logo.svg`:`../../images/just-eat.svg`}
        alt="Delivery Image"
        width={30}
        height={30}
        />
        </div>

       <p>{servicesDelivery}</p>  
       </div>  
       <div className='flex'>
       <ButtonWithIcon text={"Modifier"} Icon={MdModeEditOutline} onClick={openServicesModal}/>
       
       </div>
     </div>
    
    )
      
    
    }
    
    export default ServicesCollapse 