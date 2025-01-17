import React from "react";
import Image from "next/image";
import ButtonWithIcon from "./ButtonWithIcon";
import { MdHistory, MdAdd, MdFileUpload,MdModeEditOutline,MdRemoveRedEye,MdMoreHoriz} from "react-icons/md";
import { Space, Table,Tag } from 'antd';
import { useState } from "react";
import AddMenu from "./AddMenu";
import PushMenu from "./PushMenu";
import UpdateMenu from "./UpdateMenu";
export default function MenuPage() {
  
  const [addMenuIsOpen, setAddMenuIsOpen] = useState(false);
  const [pushMenuIsOpen, setPushMenuIsOpen] = useState({show:false,data:[]});
  const [updateMenuIsOpen, setUpdateMenuIsOpen] = useState({show:false,data:{}});



  function closeAddMenu() {
    setAddMenuIsOpen(false);
  }

  const openAddMenu=()=>{
    setAddMenuIsOpen(true);
  }
 
  function closePushMenu() {
    setPushMenuIsOpen({show:false,id:[]});
  }
  const openPushMenu=()=>{
    setPushMenuIsOpen({show:true,data:dataMenu});
  }

  const openUpdateMenu=(dataToUpdate)=>{
    setUpdateMenuIsOpen({show:true,data:dataToUpdate});
  }
 
  function closeUpdateMenu() {
    setUpdateMenuIsOpen({show:false,id:[]});
  }
  const columns = [
    {
      title: 'Nom',
      dataIndex: 'menuName',
      key: 'menuName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Type',
      dataIndex: 'typeOfMenu',
      key: 'typeOfMenu',
      render:(_, { typeOfMenu })=>{
        return (
          <Tag color={"blue"} key={typeOfMenu}>
            {typeOfMenu.toUpperCase()}
          </Tag>
        );
      }
    },
    {
      title: 'Date de création',
      dataIndex: 'dateCreateMenu',
      key: 'dateCreateMenu',
    },
    {
      title: '',
      key: 'action',
      render: (_,record) => (
       <><div className="flex flex-row gap-2 w-28">
        {console.log(record)}
           <ButtonWithIcon
            text={"Modifier"}
            Icon={MdModeEditOutline}
            onClick={()=>openUpdateMenu(record)}
          />
          <ButtonWithIcon
          text={""}
          Icon={MdRemoveRedEye}
          onClick={"toogleFilter"}
        />
        <ButtonWithIcon
          text={""}
          Icon={MdMoreHoriz}
          onClick={"toogleFilter"}
        />
        </div>
        </>
       
      ),
    },]

    const data = [
      {
        key: '1',
        imgUrl:'image.png',
        menuName:'Burger Time',
        LocalMenuName:'Burger Time',
        descMenu:"description menu",
        dateCreateMenu:'20/03/2022',
        ProductUsed: "ingredient",
        typeOfMenu: "eatIn"
      }, 
      {
        key: '2',
        imgUrl:'image2.jpg',
        menuName:'Tacos Lyonnais',
        LocalMenuName:'Tacos Lyonnais',
        descMenu:"description menu",
        dateCreateMenu:'22/03/2022',
        ProductUsed: "ingredient",
        typeOfMenu: "clickAndCollect"
      }, 
      {
        key: '3',
        menuName:'Tajine',
        LocalMenuName:'Tajine',
        dateCreateMenu:'23/03/2022',
        ProductUsed: "ingredient",
        descMenu: "Description du menu",
        imgUrl:"",
        typeOfMenu: "delivery"

      }
     










    ];
    const [dataMenu, setDataMenu] = useState(data);
  return (
    <div className="m-2 p-4 space-y-2">
      <div className="flex justify-between">
        <div className="">
          <ButtonWithIcon
            text={"Afficher L'historique Du Menu Poussé"}
            Icon={MdHistory}
          />
        </div>
        <div className="flex flex-row gap-2">
          <ButtonWithIcon
            text={"Mettre en ligne"}
            Icon={MdFileUpload}
            onClick={openPushMenu}
          />

          <ButtonWithIcon
            text={"Créer un Menu"}
            Icon={MdAdd}
            onClick={openAddMenu}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
     
        <p className="">Affiche 3 de X Établissements</p>
        <Table columns={columns} dataSource={dataMenu} />
      </div>
      <AddMenu modalIsOpen={addMenuIsOpen} closeModal={closeAddMenu} dataMenu={dataMenu} setDataMenu={setDataMenu}/>
      <PushMenu modalIsOpen={pushMenuIsOpen.show} closeModal={closePushMenu} data={pushMenuIsOpen.data}/>
      <UpdateMenu modalIsOpen={updateMenuIsOpen.show} closeModal={closeUpdateMenu} data={updateMenuIsOpen.data} dataMenu={dataMenu} setDataMenu={setDataMenu}/>

     
      
    </div>
  );
}
