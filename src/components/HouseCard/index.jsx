import React from 'react'
import { Container,Content,Img, Details, Icons } from './style'
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
                        <Details.Item>
                              <Icons.Bed/>
                        </Details.Item>
                        <Details.Item>
                             <Icons.Bath/>
                        </Details.Item>
                        <Details.Item>
                              <Icons.Car/>
                        </Details.Item>
                        <Details.Item>
                              <Icons.Rurel/>
                        </Details.Item>
                     </Details>
                  </Content>
          </Container>
  )
}


export default HouseCard