
import React from 'react'
import {Input, Button }from '../Generic'
import { Container, Search, Home, Settings} from './style'

const Filter = () => {
  return (
    <Container>
      <Input  
      icon={<Home/>}
      placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
      
      <Button type='light'> 
      {''}
      <Settings/> Advanced
      </Button>

      <Button> <Search/>Search</Button>
    </Container>
  );
}

export default Filter