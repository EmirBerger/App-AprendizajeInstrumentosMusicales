import React from 'react'

function ListContainer({ children }) {
  return (
    <div className="h-3/5 flex justify-center items-center">
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default ListContainer