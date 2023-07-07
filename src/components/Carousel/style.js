import styled from 'styled-components'
import {ReactComponent as arrow} from '../../assets/icons/left_arrow.svg'


const Container = styled.div`
    position: relative;
    height: 571px;

`

const Arrow = styled(arrow)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 18px;
    background: rgba(225, 225, 225, 0.2);
    border-radius: 50%;
    transform: ${({left}) => (left ? 'rotate(180deg)'  : 'rotate(-90)')};
    left:  ${({left}) => !left && '20px'};
    right:  ${({left}) => left && '20px'};
    cursor: pointer;
     :hover{
        background: rgba(225, 225, 225, 0.4);
    }
`;

const Img = styled.img`
    width: 100%;
    height: 573px;
    
`

const Blur = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background: rgba(0,0,0,0.4);
 
`

const Content = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;

    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
   
`

Content.Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-style: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: white;
`

Content.Desc = styled.div`
    color: #FFF;
    font-family: 'Montserrat';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`

Content.Price = styled.div`
    color: #FFF;
    font-family: 'Montserrat';
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.56px;
`




export{Container,Arrow, Img, Blur, Content}