import styled from 'styled-components'
import {ReactComponent as arrow} from '../../assets/icons/left_arrow.svg'


const Container = styled.div`
    position: relative;
    height: 571px;
    border: 1px solid red;
`

const Arrow = styled(arrow)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 18px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    transform: ${({left}) => (left ? 'rotate(180deg)'  : 'rotate(-90)')};
    left:  ${({left}) => !left && '20px'};
    right:  ${({left}) => left && '20px'};
    cursor: pointer;
     :hover{
        opacity: 0.6;
    }

  
`;




export{Container,Arrow,}