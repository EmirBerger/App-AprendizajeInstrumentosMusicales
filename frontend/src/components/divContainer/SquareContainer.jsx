import React from 'react'

function SquareContainer({ children }) {
  return (
    <div className="flex flex-col justify-center items-center h-3/5">
      <div className="flex justify-center items-center space-x-16">
        {children}
      </div>
    </div>
  )
}

export default SquareContainer