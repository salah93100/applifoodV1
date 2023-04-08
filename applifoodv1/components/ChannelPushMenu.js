import Image from 'next/image'

const ChannelPushMenu =({img,text,onChange,Ischecked})=>{

    return(
     <div className="flex flex-row gap-2 items-center justify-between w-full bg-[#fff] py-2 border-l px-1 rounded">
        <div className='flex'>
        <div>
        <Image
        src={""}
        alt="Uber Image"
        />
        </div>

       <p>{text}</p>  
       </div>  
       <div className='flex'>
       <input
            name={text}
            type="checkbox"
            className='w-8 h-8'
            checked={Ischecked}
            onChange={onChange}
             />       
       </div>
     </div>
    
    )
      
    
    }
    
    export default ChannelPushMenu 