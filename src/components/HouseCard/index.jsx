import React from 'react'
import { Container,Content,Img, Details } from './style'
import noimg from '../../assets/img/noimg.jpeg'



    const HouseCard = ({url,title}) => {
   ;



  return (
          <Container>

              <Img src={url || noimg}  />
                  <Content>
                     <div className="subTitle">{title || 'New Apartment Nice Wiew'}</div>
                     <div className="info">Quincy St, Brooklyn, NY, USA</div>
                     <Details>
                        <Details.Item>1</Details.Item>
                        <Details.Item>2</Details.Item>
                        <Details.Item>3</Details.Item>
                        <Details.Item>4</Details.Item>
                     </Details>
                  </Content>
          </Container>
  )
}


export default HouseCard