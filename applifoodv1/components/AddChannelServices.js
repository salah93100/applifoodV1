import {useState} from 'react'
import Modal from 'react-modal';
import { MdOutlineCancel } from "react-icons/md";
import ModalInput from "./ModalInput";
import InputSelect from './InputSelect';

const AddChannelServices = ({
    modalServicesIsOpen,
    closeServicesModal,
    setDataLocation,
    dataLocation,
    id,
  }) => {
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
          maxHeight: "90vh",
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      };

      const [dataModal, setdataModal] = useState({deliveryService:"Deliveroo",urlStore:""});

  const handleChange = (e) => {
    const { value, name } = e.target;

    setdataModal({ ...dataModal, [name]: value });
  };
  const handleAddChannelServices = (name) => {
    const currentLocation=dataLocation.find((location)=>location.locationName===name)
    if(currentLocation){
        const locationCurrentFilter= dataLocation.filter((location)=>location.locationName!==name)
        setDataLocation([
            {...currentLocation,
            serviceChannel:[
                ...currentLocation.serviceChannel,
                dataModal
            ]
                
            },...locationCurrentFilter  ])
    }
    console.log(currentLocation);

   // closeServicesModal()
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataModal);
   handleAddChannelServices(id)
    closeServicesModal()
  };

  return (
   <>
      <Modal
        isOpen={modalServicesIsOpen}
        onRequestClose={closeServicesModal}
        style={customStyles}
        contentLabel=" Modal Services"
      >
        <button
          onClick={closeServicesModal}
          className="absolute right-4 top-3 "
        >
          <MdOutlineCancel size={26} color="#42526E" />
        </button>
        <div className="flex flex-col w-full space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <p className="text-4xl my-2">Ajouter Services{id}</p>
              <InputSelect
              name="deliveryService"
              label={"Services"}
              value={dataModal?.deliveryService}
              onChange={handleChange} 
              options={[{value:"Uber",label:"Uber"},{value:"Deliveroo",label:"Deliveroo"},{value:"JustEat",label:"Just Eat"}]}
              />
             

           
              <ModalInput
                label={"Quel est le lien de votre Store"}
                name={"urlStore"}
                handleChange={handleChange}
                value={dataModal?.urlStore}
                placeHolder="https://www.ubereats.com/ghent/food-delivery/example-store/"
              />
              <div className="flex flex-row gap-2 sticky my-2">
                <button className="btn-blue bg-blue-500 text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white hover:border hover:border-blue-400 flex items-center gap-1">
                  Ajouter
                </button>
                <button
                  className="flex items-center hover:bg-slate-200 px-4 py-2 "
                  onClick={closeServicesModal}
                >
                  Annuler
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default AddChannelServices