import Modal from "react-modal";
import { MdOutlineCancel } from "react-icons/md";
import ModalInput from "./ModalInput";
import { useState,useEffect } from "react";
import InputSelect  from "./InputSelect";
const UpdateMenu = ({ modalIsOpen, closeModal ,data}) => {
    
const [dataMenu, setDataMenu] = useState({});


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
 
    setDataMenu({...dataMenu,[name]:value})
  }
  const handleUploadImage=(e)=>{
    const {files, name}=e.target
 
    setDataMenu({...dataMenu,[name]:files[0]})
  }
 
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(dataMenu)
  }


  useEffect(() => {
    setDataMenu(data)
    return () => {
      setDataMenu({})
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
        <button onClick={closeModal} className="absolute right-4 top-3 ">
          <MdOutlineCancel size={26} color="#42526E" />
        </button>
        <div className="my-2">
          {console.log(dataMenu)}
            <p className="text-4xl">Modifier un menu</p>
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
               value={dataMenu?.menuName}
              />

              <ModalInput 
              label={"Nom du menu en interne"} 
              name={"LocalMenuName"}
              handleChange={handleChange} 
              value={dataMenu?.LocalMenuName}
              
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
 value={dataMenu?.descMenu}
 onChange={handleChange} 
 >
Lorem Ipsum...
</textarea>
              </div>
              <div className="flex flex-col">
             
              <div className="grid grid-cols-2 gap-2">
              <InputSelect
              name="typeOfMenu"
              label={"Type"}
              value={dataMenu?.typeOfMenu}
              onChange={handleChange} 
              options={[{value:"Burger",label:"burgerTime"},{value:"Tajine",label:"tajineTime"}]}/>
 
             <InputSelect
              name="ProductUsed"
              label={"Produit utilisé"}
              value={dataMenu?.ProductUsed}
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
export default UpdateMenu;