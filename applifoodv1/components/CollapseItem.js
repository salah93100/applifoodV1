import { MdOutlineExpandMore,MdOutlineExpandLess } from "react-icons/md";
import { Collapse } from "react-collapse";
import ButtonWithIcon from "./ButtonWithIcon";
import { MdModeEditOutline,MdAdd,MdAccessTime} from "react-icons/md";
import ServicesCollapse from "./ServicesCollapse";
import Image from "next/image";

export const CollapseItem = ({open,toogle,tittle,nbServices,imageSrc,openServicesModal,openModal}) => {
  
    return (
    <div className="pt-[10px] ">

        <div className="bg-[#F9FAFC] py-[20px] px-4 flex justify-between items-center cursor-pointer p-5 rounded-md border" onClick={toogle}>
          <div className="flex flex-row gap-2">
          <Image
        src={""}
        alt="Logo Location"
        />
          <p>{tittle}</p>
          <p>{nbServices} Marque virtuel</p>
          </div>
          <div className="">
            {open?(<MdOutlineExpandLess size={18}/>):
            (<MdOutlineExpandMore  size={18}/>)}
          </div>

        </div>
 <Collapse isOpened={open}>
    <div className="bg-[#F9FAFC]  px-4 pb-[20px] flex flex-col border py-3 space-y-6">
      <div className="flex flex-row gap-2">
    <ButtonWithIcon text="Modifier" Icon={MdModeEditOutline} onClick={openModal}/>
    <ButtonWithIcon text="Marques Virtuelle" Icon={MdAdd}/>
    <ButtonWithIcon text="Horaires" Icon={MdAccessTime}/>
    
    </div>
    <p>Services:</p>
    <div className="flex flex-row">
  <ServicesCollapse text={"Ghost restaurant"} openServicesModal={()=>openServicesModal(93)}/>
    </div>
    </div>
 
 </Collapse>
      
    </div>
)
};
export default CollapseItem 