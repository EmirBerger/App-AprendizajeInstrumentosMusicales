import React from 'react'
import { Navigate } from 'react-router-dom';

function UserRol({children, userRol}) {
  const rol = localStorage.getItem('rol');

  if (rol == userRol){
    return children
  }
}

export default UserRol