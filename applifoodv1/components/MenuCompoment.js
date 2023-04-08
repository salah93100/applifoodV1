import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { MdHistory, MdAdd, MdFileUpload,MdModeEditOutline,MdRemoveRedEye,MdMoreHoriz} from "react-icons/md";
import { Space, Table,Tag } from 'antd';
import { useState } from "react";
import AddMenu from "./AddMenu";
import PushMenu from "./PushMenu";

export default function MenuPage() {
  
  const [addMenuIsOpen, setAddMenuIsOpen] = useState(false);
  const [pushMenuIsOpen, setPushMenuIsOpen] = useState({show:false,datar:[]});

  function closeAddMenu() {
    setAddMenuIsOpen(false);
  }

  const openAddMenu=()=>{
    setAddMenuIsOpen(true);
  }
 
  function closePushMenu() {
    setPushMenuIsOpen({show:false,id:[]});
  }

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render:(_, { type })=>{
        return (
          <Tag color={"blue"} key={type}>
            {type.toUpperCase()}
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
           <ButtonWithIcon
            text={"Modifier"}
            Icon={MdModeEditOutline}
            onClick={"toogleFilter"}
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
        name:'Burger Time',
        type: 'Burger',
        dateCreateMenu:'20/03/2022'
      }, 
      {
        key: '2',
        imgUrl:'image2.jpg',
        name:'Tacos Lyonnais',
        type: 'Tacos',
        dateCreateMenu:'22/03/2022'
      }, 
      {
        key: '3',
        name:'Tajine2.png',
        type: 'Plat traditionelle',
        dateCreateMenu:'23/03/2022'
      }
    ];
    const openPushMenu=()=>{
      setPushMenuIsOpen({show:true,data:data});
    }
  return (
    <div className="m-2 p-4 space-y-2">
      <div className="flex justify-between">
        <div className="">
          <ButtonWithIcon
            text={"Afficher L'historique Du Menu Poussé"}
            Icon={MdHistory}
            onClick={"toogleFilter"}
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

      <div className="flex flex-col space-y-2-4">
        <p className="">Affiche 3 de X Établissements</p>
        <Table columns={columns} dataSource={data} />
      </div>
      <AddMenu modalIsOpen={addMenuIsOpen} closeModal={closeAddMenu} />
      <PushMenu modalIsOpen={pushMenuIsOpen.show} closeModal={closePushMenu} data={pushMenuIsOpen.data}/>

      
    </div>
  );
}
