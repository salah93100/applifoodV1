
 const InputSelect = ({name,label,onChange,value,options}) => {
  return (
    <div className="flex flex-col p">
   <label className="block mb-1 text-xl font-medium "
   for={name}>{label}</label>
{console.log(value)}
<select 
name={name} 
id={name} 
onChange={onChange} 
value={value}
className="border  w-full py-3 rounded focus:ring-blue-500 focus:border-blue-500 px-3"
>
{console.log(options.map((t)=>t))}
    {options.map((option)=>{
     return (  <option
        key={option.value}
        value={option.value}
        >
         {option.label} 
        </option>)
    })}
   
</select>

   </div>
  )
}

export default InputSelect;