import React from "react";
import { Space, Table, Tag ,Badge} from 'antd';
import { MdOutlineExpandMore,MdOutlineExpandLess } from "react-icons/md";

export default function Orders() {

  const ExpandedRowRender = ({data}) => {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum',
      },
    ];
    
    return <Table className="" columns={columns} dataSource={data} pagination={false} />;
  };
  



  const dataSource = [
    {
      key: '1',
      ordersID:"#hjf75c",
      location:"Cuisine 1",
      idReçu:"#7598222",
      services:"uber",
      status:"Delivered",
      hourReceiv:"14:00:21 22/02/23",
      details:[{
        key: 'gffggs4',
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      }]

      
    },{
      key: '2',
      ordersID:"#jfdke7899",
      location:"cuisine 3",
      idReçu:"#kfkCD",
      services:"Deliveroo",
    
      status:"En cours",
      hourReceiv:"14:01:21 22/02/23",

      
    },
   
  ];
  

  const columns = [
    {
      title: 'Orders-ID',
      dataIndex: 'ordersID',
      key: 'ordersID',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'ID reçu',
      dataIndex: 'idReçu',
      key: 'idReçu',
    },
    {
      title: 'Services',
      dataIndex: 'services',
      key: 'services',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'heure de ramassage',
      dataIndex: 'hourReceiv',
      key: 'hourReceiv',
    }
  ];


  return <div className="w-full ">
             <div className="my-4">
               <Table 
                  dataSource={dataSource}
                  columns={columns}
                     expandable={{
      expandedRowRender:(record) => <ExpandedRowRender data={record.details} style={{float: 'right'}} />
       
      ,
      rowExpandable: (record) => record.name !== 'Not Expandable',
      expandIcon: ({ expanded, onExpand, record }) =>
        expanded ? (<button className="p-1 hover:bg-[#E5E9F2] cursor-pointer rounded-full" style={{float: 'right'}} onClick={e => onExpand(record, e)} >
          <MdOutlineExpandLess size={22} />
          </button>  ) : (<button className="p-1 hover:bg-[#E5E9F2] cursor-pointer rounded-full" style={{float: 'right'}}  onClick={e => onExpand(record, e)}>
          <MdOutlineExpandMore  size={22} />
          </button>   ),
      fixed:"right",
      expandIconColumnIndex:6
      
    }} />
             </div>
  </div>
}
