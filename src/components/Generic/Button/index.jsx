

import React from 'react'
import { Container } from './style'

const Input = ({children,type, onClick, width, height}) => {
  return (
    <Container onClick={onClick} type={type} width={width} height={height} >
       {children || 'Generic Input'}
    </Container>
  )
}

export default Input