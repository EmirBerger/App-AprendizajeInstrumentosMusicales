import React from 'react'

function ButtonEdit({name, type, onClick}) {
  return (
    <button type={type}
      className="w-56 h-14 my-5 text-3xl font-medium rounded-xl bg-yellow-500 text-sistro-blue hover:bg-sistro-blue-200 hover:text-yellow-500 hover:border-4 hover:border-yellow-500"
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ButtonEdit