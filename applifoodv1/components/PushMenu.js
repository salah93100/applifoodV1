import Modal from "react-modal";
import { MdOutlineCancel } from "react-icons/md";
import ModalInput from "./ModalInput";
import { useState,useEffect } from "react";
import InputSelect from "./InputSelect";
import { Select, Space } from 'antd';
import ServicesCollapse from "./ServicesCollapse";
import ChannelPushMenu from "./ChannelPushMenu";
import uberPic from  '../public/images/uber-eats.svg'
import deliverooPic from  '../public/images/deliveroo-logo.svg'
import justEatPic from  '../public/images/just-eat.svg'

const PushMenu = ({ modalIsOpen, closeModal ,data}) => {
  const defaultArrayChannel=[
    {
        img:"urls",
        text:"Uber",
        value:"restaurant Ghost",
        urlChannel:uberPic
    },
    {
        img:"url/image4",
        text:"DELIVEROO",
        value:"restaurant france",
        urlChannel:deliverooPic
        
    },
    {
        img:"url image 3",
        text:"Just Eat",
        value:"restaurant 3",
        urlChannel:justEatPic
    }
  ]
    const customStyles = {
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          width: 1200,
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: " #F9FAFC",
          maxHeight:"90vh",
          paddingLeft: "24px",
          paddingRight: "24px"
    
          
         
        },
      };

 const [dataToPushMenu, setDataToPushMenu] = useState({
    Channel:{}
 });
 const [dataMenuName, setDataMenuName] = useState([]);
 const [sendPushMenu, setSendPushMenu] = useState(false);
  const handleChange=(e)=>{
    const {name, checked}=e.target
 
   setDataToPushMenu({...dataToPushMenu,Channel:{
     ...dataToPushMenu.Channel,[name]:checked
   }})
  }
 
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(dataToPushMenu)
     setSendPushMenu(true)
  }


const handleChangeText = (value,x) => {
  console.log(`selected ${value}`);
  console.log(`selected ${value}`);
  setDataToPushMenu({...dataToPushMenu,"Menu":value})

};





useEffect(() => {
    if (data){
   
  
        data.map((data,x)=>(setDataMenuName((prevState)=>[...prevState,{
        label: data.menuName,
        value: data.menuName,
      } ])))
    }
    return () => {
        setDataMenuName([])

    };
}, [data]);
  return (
    <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal Restaurant"
    >
      {console.log(data)}
      <button onClick={closeModal} className="absolute right-4 top-3 ">
        <MdOutlineCancel size={26} color="#42526E" />
      </button>
      <div className="space-y-6">
     
        {console.log(dataToPushMenu)}
        {!sendPushMenu?(<><div className="flex my-2 ">
        <p className="text-4xl">Mettre en ligne la carte.</p>
          </div>
           <div className="flex flex-col w-full ">
      
           <form className="space-y-4" onSubmit={handleSubmit}> 
           
           <Space
       style={{
         width: '100%',
       }}
       direction="vertical"
     >
       <Select
         mode="multiple"
         allowClear
         style={{
           width: '100%',
         }}
         placeholder="Please select"
         defaultValue={"Choisissez un Menu"}
         onChange={handleChangeText}
         options={dataMenuName}
       />
       
     </Space>
     
     <div className="py-3">
   <div className="ml-2 my-4">
     {console.log(dataMenuName)}
   <p className="text-2xl">Channel</p>
   </div>
   <div className="space-y-4 ">
   
   {defaultArrayChannel.map((channel)=>{
   return(
       
       <ChannelPushMenu 
       img={channel.urlChannel} 
       text={channel.text} 
       onChange={handleChange}
       Ischecked={dataToPushMenu.Channel[channel.text]}
       />
       
   
   )
   })}
   </div>
   
   </div>
           <div className="flex flex-row gap-2 sticky my-4">
           <button className="btn-blue bg-blue-500 text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500 flex items-center gap-1">Mettre en ligne les menus</button>
           <button className="flex items-center hover:bg-slate-200 px-4 py-2 " onClick={closeModal}>Annuler</button>
           </div>
            
           </form>
         </div></> ) :(
         <div className="flex flex-col justify-center items-center my-5">
          <p className="text-xl p-5">Votre menu à bien était publier (notre équipe vous contactera en cas de besoin) </p>
          <div className="flex flex-row gap-2 sticky my-4">
           <button className="btn-blue bg-slate-600  text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500 flex items-center gap-1" onClick={closeModal}>Fermer</button>
           </div>
         </div>)}
       
     
      </div>
    </Modal>
  </>
  )
}

export default PushMenu