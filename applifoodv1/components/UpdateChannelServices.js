import Modal from "react-modal";
import { MdOutlineCancel } from "react-icons/md";
import ModalInput from "./ModalInput";
import { useState,useEffect } from "react";
import InputSelect from "./InputSelect";

const UpdateChannelServices = ({
  modalServicesIsOpen,
  closeServicesModal,
  dataUpdateServices,
  setDataLocation,
  dataLocation,
  locationName
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

  const [dataModal, setdataModal] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;

    setdataModal({ ...dataModal, [name]: value });
  };

  const handleUpdateChannelServices = (nameChannelServicesID,idLocation) => {
 //Array Map and condition for update services 

 setDataLocation(dataLocation.map(location=>

 location.locationName === idLocation ?{...location,
  serviceChannel:location.serviceChannel.map(
    services=>services.id===nameChannelServicesID?dataModal:{...services})
 }  :location))

 
 

 //Array

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateChannelServices(dataModal.id,locationName)
    console.log(dataLocation);
  };
useEffect(() => {
  if(dataUpdateServices){
    setdataModal({
      deliveryService:dataUpdateServices?.deliveryService,
      urlStore:dataUpdateServices?.urlStore,
      id:dataUpdateServices?.id
    })
  }
  return () => {
    setdataModal({})
  };
}, [dataUpdateServices]);




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
          {console.log(dataModal.id+"loc")}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <p className="text-4xl my-2 text-[#03002b]">Modifier Services{dataUpdateServices?.deliveryService} </p>

              <InputSelect
              name="deliveryService"
              label={"Services"}
              value={dataModal.deliveryService}
              onChange={handleChange} 
              options={[{value:"Uber",label:"Uber"},{value:"Deliveroo",label:"Deliveroo"},{value:"JustEat",label:"Just Eat"}]}
              />
             

           
              <ModalInput
                label={"Quel est le lien de votre Store"}
                name={"urlStore"}
                handleChange={handleChange}
                value={dataModal.urlStore}
                placeHolder="https://www.ubereats.com/ghent/food-delivery/example-store/"
              />
              <div className="flex flex-row gap-2 sticky my-2">
                <button className="btn-blue bg-blue-500 text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white hover:border hover:border-blue-400 flex items-center gap-1">
                  Modifier
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
  );
};
export default UpdateChannelServices;
