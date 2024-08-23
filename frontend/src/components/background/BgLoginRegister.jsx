import React from 'react'

function BgLoginRegister({ children }) {
  return (
    <div className="flex items-center justify-center px-6 py-6 h-screen">
      <div className="w-[700px] h-full rounded-3xl border-4 border-sistro-green bg-sistro-blue overflow-y-auto scrollbar-none">
        <div className="px-8 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BgLoginRegister