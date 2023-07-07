import styled from 'styled-components'
import {ReactComponent as arrow} from '../../assets/icons/left_arrow.svg'
import {ReactComponent as bath} from '../../assets/icons/bath.svg'
import {ReactComponent as bed} from '../../assets/icons/bed.svg'
import {ReactComponent as car} from '../../assets/icons/car.svg'
import {ReactComponent as ruler} from '../../assets/icons/ruler.svg'


const Container = styled.div`
   width: 380px;
   height: 430px;
 
   filter: drop-shadow(0px 20px 38px rgba(0,0,0,0.06))
   drop-shadow(0px 7px 46px rgba(0,0,0,0.06))
   drop-shadow(0px 8px 15px rgba(0,0,0,0.06));
   border: 1px solid red;
   margin: 100px;

`

const Img = styled.img`
    width: 100%;
    max-height: 220px;
    margin-bottom: 24px;
    
`

const Content = styled.div`
    padding: 0 20px;
`

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

`

Details.Item = styled.div`
     display: flex;
     flex-direction:column;

`

const Icons = styled.div`

`

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Rurel = styled(ruler)``;



export{Container,Img,Content, Details, Icons}