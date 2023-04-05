import CollapseItem from './CollapseItem';
import { useState } from "react";
import ButtonWithIcon from './ButtonWithIcon';
import { MdFilterAlt,MdAdd,MdAccessTime} from "react-icons/md";
import ModalCollapseRestaurant from './ModalCollapseRestaurant'
import ModalCollapseServices from './ModalCollapseServices';
import ModalAddLocation from './ModalAddLocation';
import ModalInput from './ModalInput';

const Location =({})=>{

    const [open, setOpen] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [searchLocation, setSearchLocation] = useState("");
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
      const [modalServicesIsOpen, setModalServicesIsOpen] = useState({show:false,id:""});
      const [modalAddServicesIsOpen, setModalAddServicesIsOpen] = useState({show:false,id:""});

  
      const openModal=(index)=>{
        setModalIsOpen({show:true,id:index});
      }

      const openServicesModal=(index)=>{
        setModalServicesIsOpen({show:true,id:index});
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
      function closeAddServicesModal() {
        setModalAddServicesIsOpen({show:false,id:""});
      }
      


      const arrayLocation = [
        {tittle:"restaurant 1",nbServices:"3", imageSrc:"url:/Test Image"},
        {tittle:"restaurant 2",nbServices:"3", imageSrc:"url:/Test Image"},
        {tittle:"restaurant 3",nbServices:"3", imageSrc:"url:/Test Image"}
      ]
      
    
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
          {console.log(modalServicesIsOpen)}
            <p className=''>Affiche {arrayLocation.length} de {arrayLocation.length} Établissements</p>

            {arrayLocation.filter((filterLocation)=>{
              if (searchLocation==""){
                return filterLocation
              } else if(filterLocation.tittle.toLowerCase().includes(searchLocation.toLowerCase())){
                return filterLocation
              }
            }).map((Location,index)=>{
              return(
                <CollapseItem 
                key={index}
                  open={open===index} 
                tittle={Location.tittle} 
                toogle={()=>toogle(index)} 
                nbServices={Location.nbServices} 
                imageSrc={Location.imageSrc}
                openModal={()=>openModal(index)}
                openServicesModal={openServicesModal}
                />
               
              )
            })}
            
       
 <ModalAddLocation modalIsOpen={modalAddServicesIsOpen.show}  closeModal={closeAddServicesModal} />
  <ModalCollapseRestaurant modalIsOpen={modalIsOpen.show} id={modalIsOpen.id} closeModal={closeModal} />
          <ModalCollapseServices modalServicesIsOpen={modalServicesIsOpen.show} id={modalServicesIsOpen.id}  closeServicesModal={closeServicesModal}/>
        </div>
      );
}

export default Location 