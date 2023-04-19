import CollapseItem from './CollapseItem';
import { useState } from "react";
import ButtonWithIcon from './ButtonWithIcon';
import { MdFilterAlt,MdAdd,MdAccessTime} from "react-icons/md";
import ModalCollapseRestaurant from './ModalCollapseRestaurant'
import UpdateChannelServices from './UpdateChannelServices';
import ModalAddLocation from './ModalAddLocation';
import ModalInput from './ModalInput';
import AddChannelServices from './AddChannelServices';



const Location =({})=>{

    const [open, setOpen] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [searchLocation, setSearchLocation] = useState("");
    const arrayLocation = [
      {locationName:"Crispy Nan",
      nbServices:"3", 
      imageSrc:"url:/Test Image",
      serviceChannel:[{urlStore:"url:/Test channel",deliveryService:"Uber",nameLocation:"Crispy Nan",id:0},
      {urlStore:"url:/Test channel",deliveryService:"Deliveroo",nameLocation:"Crispy Nan",id:1},
      {urlStore:"url:/Testchannel",deliveryService:"JustEat",nameLocation:"Crispy Nan",id:2}]},

      {locationName:"Restaurant fruit de mer",
      nbServices:"3",
      imageSrc:"url:/Test Image",
      serviceChannel:[{urlStore:"url:/Test channel",deliveryService:"Deliveroo",nameLocation:"Restaurant fruit de mer",id:0}]},

      {locationName:"Le Cabestant",
      nbServices:"3",
      imageSrc:"url:/Test Image",
      serviceChannel:[{urlStore:"url:/Test channel",deliveryService:"JustEat",nameLocation:"Le Cabestant",id:0}]}
    ]
    const [dataLocation, setDataLocation] = useState(arrayLocation);

    const toogle=(index)=>{
     if(open===index){
         return setOpen(null)
     }
     setOpen(index)
    } 
    const toogleFilter=()=>{
      if(!openFilter){
          return setOpenFilter(true)
      }
      setOpenFilter(false)
     } 

    const onChange = (key) => {
        console.log(key);
      };
      const [modalIsOpen, setModalIsOpen] = useState({show:false,id:""});
      const [modalServicesIsOpen, setModalServicesIsOpen] = useState({show:false,dataUpdateServices:{},locationNameModal:""});
      const [modalAddServicesIsOpen, setModalAddServicesIsOpen] = useState({show:false,id:""});
      const [modalAddChannelServices, setModalAddChannelServices] = useState({show:false,id:""});

  
      const openModal=(index)=>{
        setModalIsOpen({show:true,id:index});
      }

      const openServicesModal=(data,locationNameModal)=>{
        setModalServicesIsOpen({show:true,dataUpdateServices:data,locationNameModal:locationNameModal});
      }
      const openAddChannelServices=(index)=>{
        setModalAddChannelServices({show:true,id:index});
      }
      const openAddServicesModal=()=>{
        setModalAddServicesIsOpen({show:true});
      }
      function closeModal() {
        setModalIsOpen({show:false,id:""});
      }
      function closeServicesModal() {
        setModalServicesIsOpen({show:false,id:""});
      }
      function closeAddChannelServices() {
        setModalAddChannelServices({show:false,id:""});
      }
      function closeAddServicesModal() {
        setModalAddServicesIsOpen({show:false,id:""});
      }
      


  
      
    
    return (
        <div className='m-2 px-6 space-y-2'>
          {console.log(openFilter)}
          <div className='flex flex-col'>
          <div className='flex flex-row gap-2 my-2 py-2'>
            <ButtonWithIcon text={"Filtrer"} Icon={MdFilterAlt} onClick={toogleFilter}/>
            <ButtonWithIcon text={"Ajouter une Location"} Icon={MdAdd} onClick={openAddServicesModal} />
 
          </div>
          {openFilter?(<div>
          <label 
       for={"searchLocation"}
       class="block mb-2 text-md font-medium ">Name :</label>
          <input
           type="text"
           id="searchLocation"
           name="searchLocation"
           value={searchLocation}
           className="border w-72 py-2 rounded focus:ring-blue-500 focus:border-blue-500 px-3"
           onChange={(e)=>{
           setSearchLocation(e.target.value)
          }}
                />
           </div>):""}
          
           </div>
          {console.log(dataLocation)}
            <p className=''>Affiche {dataLocation.length} de {dataLocation.length} Établissements</p>

            {dataLocation.filter((filterLocation)=>{
              if (searchLocation==""){
                return filterLocation
              } else if(filterLocation.locationName.toLowerCase().includes(searchLocation.toLowerCase())){
                return filterLocation
              }
            }).map((Location,index)=>{
              return(
                <CollapseItem 
                key={index}
                open={open===index} 
                colapseData={Location} 
                toogle={()=>toogle(index)} 
                imageSrc={Location.imageSrc}
                openModal={()=>openModal(index)}
                openServicesModal={openServicesModal}
                openAddChannelServices={openAddChannelServices}
                serviceChannel={Location.serviceChannel}
                setDataLocation={setDataLocation}
                locationName={Location.locationName}
                />
               
              )
            })}
            
       
          <ModalAddLocation modalIsOpen={modalAddServicesIsOpen.show}  closeModal={closeAddServicesModal} setDataLocation={setDataLocation}  dataLocation={dataLocation}/>
          <ModalCollapseRestaurant modalIsOpen={modalIsOpen.show} id={modalIsOpen.id} closeModal={closeModal} />
          <AddChannelServices modalServicesIsOpen={modalAddChannelServices.show} id={modalAddChannelServices.id}  closeServicesModal={closeAddChannelServices} setDataLocation={setDataLocation} dataLocation={dataLocation}/>
          <UpdateChannelServices modalServicesIsOpen={modalServicesIsOpen.show} dataUpdateServices={modalServicesIsOpen.dataUpdateServices}  closeServicesModal={closeServicesModal} setDataLocation={setDataLocation} dataLocation={dataLocation} locationName={modalServicesIsOpen.locationNameModal}/>
        </div>
      );
}

export default Location 