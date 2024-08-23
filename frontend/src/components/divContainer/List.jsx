import React from 'react'

function List({ children, classNumber, author, type }) {
  let content;
  if (type === 'Clase') {
    content = (
      <div className='w-full h-full flex flex-col justify-center items-center relative'>
        <p className="text-sm absolute top-2 left-2 pl-3 rounded-md">{type} {classNumber}</p>
        {children}
      </div>
    );
  } else if (type === 'Canción') {
    content = (
      <div className='w-full h-full flex flex-col justify-center items-center relative'>
        <p className="text-sm absolute top-2 left-2 pl-3 rounded-md">Autor: {author}</p>
        {children}
      </div>
    );
  } 
  return (
    <div className='w-4/6 h-28 rounded-2xl border-sistro-green border-2 bg-sistro-blue-200 text-white mx-auto mb-8'>
      {content}
    </div>
  )
}

export default List