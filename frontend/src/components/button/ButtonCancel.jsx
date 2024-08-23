import React from 'react'

function ButtonCancel({ name, type, onClick }) {
  return (
    <button type={type}
      className="w-56 h-14 my-5 text-3xl font-medium rounded-xl bg-sistro-blue text-sistro-green border-4 border-sistro-green hover:bg-sistro-blue-200"
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ButtonCancel