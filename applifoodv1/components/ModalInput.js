
const ModalInput =({label,name,handleChange,value})=>{

    return(
      <div className="flex flex-col">
       <label 
       for={name}
       class="block mb-1 text-xl font-medium ">{label}</label>
       <input
         type="text"
         id={name}
         name={name}
         value={value}
         className="border  w-full py-3 rounded focus:ring-blue-500 focus:border-blue-500 px-3"
         onChange={handleChange}
                />
      </div>
    
    )
      
    
    }
    
export default ModalInput 