
const ButtonWithIcon = ({ text, Icon, onClick }) => {

  return (
    <button
      className='btn-blue bg-blue-500 text-white px-4 py-2 rounded-sm  hover:text-blue-600 hover:bg-white flex items-center gap-1 hover:border hover:border-blue-500' onClick={onClick}>
      <Icon size={17} />
      <span>{text}</span>
    </button>

  )


}

export default ButtonWithIcon 