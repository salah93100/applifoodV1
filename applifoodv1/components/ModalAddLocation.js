import Modal from "react-modal";
import { MdOutlineCancel } from "react-icons/md";
import ModalInput from "./ModalInput";
import { useState } from "react";

const ModalAddLocation = ({ modalIsOpen, closeModal }) => {
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

  const [dataModal, setdataModal] = useState({});

  const handleChange=(e)=>{
    const {value, name}=e.target
 
    setdataModal({...dataModal,[name]:value})
  }
 
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(dataModal)
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
            <p className="text-4xl">Ajouter une Location</p>
            </div>
        <div className="flex flex-col w-full ">
          <form className="space-y-4" onSubmit={handleSubmit}> 
            
            <ModalInput label={" Quel est le nom de votre Cuisine?"} name={"locationName"} handleChange={handleChange} value={dataModal?.locationName}/>

           
            <div className="space-y-4">
                <div className="flex flex-col ">
              <p className="text-4xl my-2">Adresse du Restaurant</p>
              <ModalInput label={"Rue"} 
              name={"adress"}
              handleChange={handleChange}
              value={dataModal?.adress} />
              <div className="grid grid-cols-2 gap-2">
              <ModalInput 
              label={"Ville"}
               name={"city"}
               handleChange={handleChange}
               value={dataModal?.city}
              />

              <ModalInput 
              label={"Code Postal"} 
              name={"postalCode"}
              handleChange={handleChange} 
              value={dataModal?.postalCode}
              
              />
              
              </div>
             
              <ModalInput 
              label={"Num tel"} 
              name={"numberTel"}
              handleChange={handleChange} 
              value={dataModal?.numberTel}
              
              />
              </div>
              <div className="flex flex-col">
              <p className="text-4xl my-2">Contact Responsable Restaurant</p>
              <div className="grid grid-cols-2 gap-2">
              <ModalInput 
              label={"Nom"} 
              name={"lastName"}
              handleChange={handleChange} 
              value={dataModal?.lastName}
              />

              <ModalInput 
              label={"Prenom"} 
              name={"firstName"}
              handleChange={handleChange} 
              value={dataModal?.firstName}
              />
              </div>
              <ModalInput 
              label={"email"} 
              name={"email"}
              handleChange={handleChange} 
              value={dataModal?.email}
              />
              <ModalInput 
              label={"numéro de télephone"} 
              name={"numTel"}
              handleChange={handleChange} 
              value={dataModal?.numTel}/>
              </div>
            </div>
          <div className="flex flex-row gap-2 sticky">
          <button className="btn-blue bg-blue-500 text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500 flex items-center gap-1">Modifier</button>
          <button className="flex items-center hover:bg-slate-200 px-4 py-2 " onClick={closeModal}>Annuler</button>
          </div>
           
          </form>
        </div>
      </Modal>
    </>
  );
};
export default ModalAddLocation;
