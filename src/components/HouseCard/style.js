import styled from 'styled-components'
import {ReactComponent as arrow} from '../../assets/icons/left_arrow.svg'
import {ReactComponent as bed} from '../../assets/icons/hero_bath.svg'
import {ReactComponent as bath} from '../../assets/icons/hero_bed.svg'
import {ReactComponent as car} from '../../assets/icons/hero_car.svg'
import {ReactComponent as ruler} from '../../assets/icons/hero_ruler.svg'


const Container = styled.div`
   width: 380px;
   height: 430px;
   flex-shrink: 0;
   border-radius: 3px;
   border: 1px solid var(--border-color, #E6E9EC);
   background: var(--color-5, #FFF);
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

`

Details.Item = styled.div`
     display: flex;
     flex-direction:column;

`

const Icons = styled.div`

`



export{Container,Img,Content, Details}