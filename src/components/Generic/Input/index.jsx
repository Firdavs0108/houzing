

import React from 'react'
import { Container, Wrapper, Icon } from './style'

const Button = ({type, 
  onChange, 
  defaultValue, 
  value, 
  placeholder,
  name,
  width,
  height,
  icon,

}) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container 
         
         icon={icon}
         placeholder={placeholder} 
         name={name}
         value={value}
         defaultValue={defaultValue}
         onChange={onChange} 
         type={type} 
         width={width}
         height={height}
      />
    </Wrapper>
      
  
  )
}

export default Button