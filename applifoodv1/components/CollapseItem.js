import { MdOutlineExpandMore,MdOutlineExpandLess } from "react-icons/md";
import { Collapse } from "react-collapse";
import ButtonWithIcon from "./ButtonWithIcon";
import { MdModeEditOutline,MdAdd,MdAccessTime} from "react-icons/md";
import ServicesCollapse from "./ServicesCollapse";
import Image from "next/image";

export const CollapseItem = ({open,
  toogle,
  imageSrc,
  openServicesModal,
  openUpdateLocationModal,
  colapseData,
  openAddChannelServices,
  serviceChannel,
  setDataLocation}) => {
  
    return (
    <div className="pt-[10px] ">

        <div className="bg-[#F9FAFC] py-[20px] px-4 flex justify-between items-center cursor-pointer p-5 rounded-md border" onClick={toogle}>
          <div className="flex flex-row gap-2">
            <div className="">
          <Image
        src={"../../images/LogoFavicon.svg"}
        width={23}
        height={23}
        alt="Logo Location"
        />
        </div>
          <p>{colapseData.locationName}</p>
          {serviceChannel?(
           <p>{serviceChannel.length} Marques virtuel</p>)
          :""}
         
          </div>
          <div className="">
            {open?(<MdOutlineExpandLess size={18}/>):
            (<MdOutlineExpandMore  size={18}/>)}
          </div>

        </div>
 <Collapse isOpened={open}>
    <div className="bg-[#F9FAFC]  px-4 pb-[20px] flex flex-col border py-3 space-y-6">
      <div className="flex flex-row gap-2">
    <ButtonWithIcon text="Modifier" Icon={MdModeEditOutline} onClick={()=>openUpdateLocationModal(colapseData)}/>
    <ButtonWithIcon text="Marques Virtuelle" Icon={MdAdd} onClick={()=>openAddChannelServices(colapseData.locationName)}/>
    <ButtonWithIcon text="Horaires" Icon={MdAccessTime}/>
    
    </div>
    <p>Services:</p>
    {console.log(serviceChannel)}
    <div className="flex flex-col gap-3">
 {serviceChannel? serviceChannel.map((services)=>{
      return(
        <div className="flex flex-row" key={services.urlStore}>
        <ServicesCollapse 
           servicesDelivery={services.deliveryService} 
           openServicesModal={()=>openServicesModal(services,colapseData.locationName)}/>
        </div>

      )
    }):(<p className="text-slate-400">Ajouter un service</p>)}
    </div>
    </div>
 
 </Collapse>
      
    </div>
)
};
export default CollapseItem 