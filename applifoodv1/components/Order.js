import { useState, useEffect } from "react";
import { Space, Table, Tag, Badge } from "antd";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import Image from "next/image";

export default function Orders() {
  const [columnss, setColumn] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);


const arrayTestOrder=
[ {id: 1, 
  location: "Délices d'ailleurs", 
  idReceip: "#CB57893", 
  services: "uber-eats", 
  status: "Livrer",
  hourReceivCommand:"27/04/2023",
  details:[{
    dataDetails:"27/04/2023",
    dataName:"Sandwich poisson",
    dataStatus:"d",
    dataUpgradeStatus:"Livrer",
  },
]

},{id: 2, 
  location: "MyFrench Cantine", 
  idReceip: "#CB57893", 
  services: "deliveroo-logo", 
  status: "En cours",
  hourReceivCommand:"28/04/2023",
  details:[{
    dataDetails:"28/04/2023",
    dataName:"pâtes carbonara",
    dataStatus:"Livrer",
    dataUpgradeStatus:"en cours",
  },
  
]

},{id: 3, 
  location: "Bendjab", 
  idReceip: "#CB57893", 
  services: "just-eat", 
  status: "Annuler",
  hourReceivCommand:"28/04/2023",
  details:[{
    dataDetails:"28/04/2023",
    dataName:"poulet riz curry",
    dataStatus:"Livrer",
    dataUpgradeStatus:"en cours",
  },
  
]

}]


  const ExpandedRowRender = ({ data }) => {
    const columns = [
      {
        title: "Date",
        dataIndex: "dataDetails",
        key: "date",
      },
      {
        title: "Name Menu",
        dataIndex: "dataName",
        key: "name",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.name - b.name,
      },
      {
        title: "Status",
        key: "dataStatus",
        render: () => <Badge status="success" text="Finished" />,
      },
      {
        title: "Upgrade Status",
        dataIndex: "dataUpgradeStatus",
        key: "upgradeNum",
      },
    ];

    return (
      <Table
        className=""
      
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const columns = [
    {
      title: "Orders-ID",
      dataIndex: "id",
      key: "ordersID",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      filters: [
        {
          text: "Cuisine 1",
          value: "Cuisine 1",
        },
        {
          text: "cuisine 2 ",
          value: "cuisine 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.location.startsWith(value),
      width: "20%",
    },
    {
      title: "ID reçu",
      dataIndex: "idReceip",
      key: "idReçu",
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",  
      render:(_, { services })=>{
       
        return (
          <Image 
          src={`../../../images/${services}.svg`}  
        alt="Services"
        width={50}
        height={50}
        className='object-cover'/>
        );
    
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render:(_, { status })=>{
       
       if(status==="Livrer"){
        return ( <Tag color={"green"} key={status}>
        {status}
      </Tag>)
      
       }
       else if(status==="En cours"){
        return ( <Tag color={"orange"} key={status}>
        {status}
      </Tag>)
      
       }
       else if(status==="Annuler"){
        return ( <Tag color={"red"} key={status}>
        {status}
      </Tag>)
      
       }
       
     
        
   
      },
      filters: [
        {
          text: "En cours",
          value: "En cours",
        },
        {
          text: "Canceled",
          value: "Canceled",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.status.startsWith(value),
      width: "20%",
    },
    {
      title: "heure de ramassage",
      dataIndex: "hourReceivCommand",
      key: "hourReceiv",
      filters: [
        {
          text: "14:00:21 22/02/23",
          value: "14:00:21 22/02/23",
        },
        {
          text: "14:01:21 22/02/23",
          value: "14:01:21 22/02/23",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.hourReceiv.startsWith(value),
      width: "20%",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {};

  useEffect(() => {
    const fetchCommand = async ()=>{
  try{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((response) => setDataSource(response.products));
  }catch(err){
    console.log(err)
  }
    }
   
    fetchCommand()
    return () => {
      setDataSource([]);
      setLoading(true)
    };
  }, []);

  return (
    <div className="w-full ">
      {console.log(dataSource)}
      <ul>
      {dataSource.map((data)=>
       (<li key={data.id}>{data.title}</li>))
       }
       </ul>
      {loading?(<div className="text-3xl" data-testid="loadingDiv" >Chargement...⏳</div>
      ):(<div className="my-4 px-2"  >

      <Table
        dataSource={arrayTestOrder}
        rowKey={(record) => record.id} 
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <ExpandedRowRender
              data={record.details}
              style={{ float: "right" }}
            />
          ),
      
          rowExpandable: (record) => record.name !== "Not Expandable",
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <button
                className="p-1 hover:bg-[#E5E9F2] cursor-pointer rounded-full"
                style={{ float: "right" }}
                onClick={(e) => onExpand(record, e)}
              >
                <MdOutlineExpandLess size={22} />
              </button>
            ) : (
              <button
                className="p-1 hover:bg-[#E5E9F2] cursor-pointer rounded-full"
                style={{ float: "right" }}
                onClick={(e) => onExpand(record, e)}
              >
                <MdOutlineExpandMore size={22} />
              </button>
            ),
          fixed: "right",
          expandIconColumnIndex: 6,
        }}
      />
      </div>)}
     
 
    </div>
  );
}

