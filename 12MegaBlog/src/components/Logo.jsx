import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
  
      <img src={logo} alt='Logo' className="h-10 w-auto object-contain"/>
    
  )
}

export default Logo