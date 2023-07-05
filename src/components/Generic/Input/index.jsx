

import React from 'react'
import { Container } from './style'

const Button = ({type, 
  onChange, 
  defaultValue, 
  value, 
  placeholder,
  name,
  width,
  height,

}) => {
  return (
    <Container 
    placeholder={placeholder} 
    name={name}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange} 
    type={type} 
    width={width}
    height={height}
    
    />
      
  
  )
}

export default Button