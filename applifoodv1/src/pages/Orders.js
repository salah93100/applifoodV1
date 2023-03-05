import {React,useState,useEffect} from "react";
import { Space, Table, Tag ,Badge} from 'antd';
import { MdOutlineExpandMore,MdOutlineExpandLess } from "react-icons/md";

export default function Orders() {
  const [columnss, setColumn] = useState([]);
  const [dataSource, setDataSource] = useState([]);

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
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.name - b.name,
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
  



  const columns = [
    {
      title: 'Orders-ID',
      dataIndex: 'id',
      key: 'ordersID',
    },
    {
      title: 'Location',
      dataIndex: 'brand',
      key: 'location',
      filters: [
        {
          text: 'Cuisine 1',
          value: 'Cuisine 1',
        },
        {
          text: 'cuisine 2 ',
          value: 'cuisine 2',
        },
       
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.location.startsWith(value),
      width: '20%',
    },
    {
      title: 'ID reçu',
      dataIndex: 'id',
      key: 'idReçu',
    },
    {
      title: 'Services',
      dataIndex: 'description',
      key: 'services',
    },
    {
      title: 'Status',
      dataIndex: 'stock',
      key: 'status',
      filters: [
        {
          text: 'En cours',
          value: 'En cours',
        },
        {
          text: 'Canceled',
          value: 'Canceled',
        },
       
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.status.startsWith(value),
      width: '20%',
    },
    {
      title: 'heure de ramassage',
      dataIndex: 'title',
      key: 'hourReceiv',
      filters: [
        {
          text: '14:00:21 22/02/23',
          value: '14:00:21 22/02/23',
        },
        {
          text: '14:01:21 22/02/23',
          value: '14:01:21 22/02/23',
        },
       
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.hourReceiv.startsWith(value),
      width: '20%',
    }
  ];
  const onChange = (pagination, filters, sorter, extra) => {
  };

useEffect(() => {
  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((response)=>
setDataSource(response.products));

return () => {
  setDataSource([]);

};       

}, []);



  return <div className="w-full ">
   {console.log(dataSource[0])}
             <div className="my-4">
               <Table 
                  dataSource={dataSource}
                 
                  columns={columns}
                     expandable={{
      expandedRowRender:(record) => <ExpandedRowRender data={record.images} style={{float: 'right'}} />
       
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
