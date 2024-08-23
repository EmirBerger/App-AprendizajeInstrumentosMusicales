import React from 'react'

function ButtonDelete({name, type, onClick}) {
  return (
    <button type={type}
      className="w-56 h-14 my-5 text-3xl font-medium rounded-xl bg-red-600 text-sistro-blue hover:bg-sistro-blue-200 hover:text-red-600 hover:border-4 hover:border-red-600"
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ButtonDelete