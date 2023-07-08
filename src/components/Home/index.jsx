
import React from 'react'
import { Container } from './style'
import Carousel from '../Carousel'
import HouseCard from '../HouseCard';
import Properties from '../Properties'


const Home = () => {
  return (
    <Container>
      <Carousel/>
      <HouseCard/>
      <Properties/>
      </Container>
  );
}

export default Home