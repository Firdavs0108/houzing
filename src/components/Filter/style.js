
import styled from 'styled-components'
import {ReactComponent as home} from '../../assets/icons/option_home.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as settings} from '../../assets/icons/settings.svg'



const Container = styled.div`
    display: flex;
    padding: var(--padding);
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 40px;
    
` 

const Icons = styled.div``

const Home = styled(home)``
const Search = styled(search)``
const Settings = styled(settings)``



export{Container, Icons, Home, Search, Settings}