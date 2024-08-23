import React from 'react'

const Button = ({name, type,  onClick}) =>{
  return (
    <button type={type}
    className="w-56 h-14 my-5 text-3xl font-medium rounded-xl bg-sistro-green text-sistro-blue hover:bg-sistro-blue-200 hover:text-sistro-green hover:border-4 hover:border-sistro-green"
    onClick={onClick}
    >
        {name}
    </button>

  )
}

export default Button