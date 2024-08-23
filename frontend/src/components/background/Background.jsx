import React from 'react'

function Background({ children}) {
  return (
    <div className="flex items-center justify-center px-6 py-6 h-screen">
      <div className="max-w-screen-xl w-full h-full rounded-3xl border-4 border-sistro-green bg-sistro-blue overflow-y-auto  scrollbar-none">
        <div className="h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Background