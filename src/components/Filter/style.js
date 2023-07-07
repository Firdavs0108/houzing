
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
const Search = styled(search)`
    padding-right: 4px;
`
const Settings = styled(settings)`
    padding-right: 4px;
`
const MenuWrapper = styled.div`
    padding: 30px;
    background: white;
    border: 1px solid #e6e9ec;
`
const Section = styled.div`

    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`





export{Container, Icons, Home, Search, Settings, MenuWrapper, Section}