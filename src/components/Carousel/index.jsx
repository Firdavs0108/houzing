import React, {useRef} from 'react'
import { Container,Arrow } from './style'
import { Carousel } from 'antd';


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  

const GenCarousel = () => {
    const leftRef = useRef()
    const rightRef = useRef()
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <Container>
        <Arrow left/>
            <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
            </Carousel>
            <Arrow/>
    </Container>
  )
}

export default GenCarousel