import Modal from "react-modal";
import { MdOutlineCancel } from "react-icons/md";
import ModalInput from "./ModalInput";
import { useState } from "react";
import InputSelect  from "./InputSelect";
const AddMenu = ({ modalIsOpen, closeModal ,setDataMenu,dataMenu}) => {
    
const [dataPushMenu, setDataPushMenu] = useState( {
    key: Math.round(Math.random() * 10),
    imgUrl:'',
    descMenu:'',
    LocalMenuName:'',
    menuName:'',
    typeOfMenu: 'Quel est le type de Menu',
    ProductUsed:'selectionner un produit',
    dateCreateMenu:new Date().toLocaleDateString("fr"),
  });


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
      width: 600,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: " #F9FAFC",
      maxHeight:"90vh",
      paddingLeft: "24px",
      paddingRight: "24px"

      
     
    },
  };


  const handleChange=(e)=>{
    const {value, name}=e.target
 
    setDataPushMenu({...dataPushMenu,[name]:value})
  }
  const handleUploadImage=(e)=>{
    const {files, name}=e.target
 
    setDataPushMenu({...dataPushMenu,[name]:files[0]})
  }
 
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(dataPushMenu)
     setDataMenu([...dataMenu,dataPushMenu])
     closeModal()
     setDataPushMenu({})
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Restaurant"
      >
        <button onClick={closeModal} className="absolute right-4 top-3 ">
          <MdOutlineCancel size={26} color="#42526E" />
        </button>
        <div className="my-2">
            <p className="text-4xl">Créer un menu</p>
            </div>
           
        <div className="flex flex-col w-full ">
          <form className="space-y-4" onSubmit={handleSubmit}> 

            <div className="space-y-4">
                <div className="flex flex-col gap-4">
                    {console.log(dataMenu)}
                <label 
       for={"imageMenu"}
       class="block mb-2 text-xl font-medium ">{"Image du Menu"}</label>
       <input
         type="file"
         id="imgUrl"
         name="imgUrl"
         className="border  w-full py-3 rounded focus:ring-blue-500 focus:border-blue-500 px-3"
         onChange={handleUploadImage}
                />
              <div className="grid grid-cols-2 gap-2 justify-center items-center">
              <ModalInput 
              label={"Nom du menu (plateformes)"}
               name={"menuName"}
               handleChange={handleChange}
               value={dataPushMenu?.menuName}
               placeHolder={"Entrer le nom du menu"}
              />

              <ModalInput 
              label={"Nom du menu en interne"} 
              name={"LocalMenuName"}
              handleChange={handleChange} 
              value={dataPushMenu?.LocalMenuName}
              placeHolder={"Entrer le nom du menu en Local"}             
              />
              
              </div>
             
        

<label 
       for={"descMenu"}
       class="block mb-1 text-xl font-medium ">{"Description du menu"}</label>
<textarea
 id="descMenu" 
 name="descMenu" 
 rows="3" 
 cols="33"
 value={dataPushMenu.descMenu}
 onChange={handleChange} 
 className="text-slate-400 pl-2 pt-2"
 >
Décrire votre menu...
</textarea>
              </div>
              <div className="flex flex-col">
             
              <div className="grid grid-cols-2 gap-2">
              <InputSelect
              name="typeOfMenu"
              label={"Type"}
              value={dataPushMenu.typeOfMenu}
              onChange={handleChange} 
              options={[{value:"delivery",label:"Emporter"},
              {value:"eatIn",label:"Sur place"},
              {value:"clickAndCollect",label:"Click & collect"}]}/>
 
             <InputSelect
              name="ProductUsed"
              label={"Produit utilisé"}
              value={dataPushMenu.ProductUsed}
              onChange={handleChange} 
              options={[{value:"ingerdient",label:"Ingredien 1"},{value:"ingredient",label:"Ingredien 2"}]}/>

              
            
              </div>
              
              </div>
            </div>
          <div className="flex flex-row gap-2 sticky">
          <button className="btn-blue bg-blue-500 text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500 flex items-center gap-1">Ajouter le menu</button>
          <button className="flex items-center hover:bg-slate-200 px-4 py-2 " onClick={closeModal}>Annuler</button>
          </div>
           
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddMenu;