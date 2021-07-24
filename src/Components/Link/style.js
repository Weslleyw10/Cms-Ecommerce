import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkItem = styled(Link).attrs({})`
    min-width: 10%;        
    padding: .5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;

    :hover {
        background: #eeeeee;
        transition: .3s;
        color: #000;
        text-decoration: none;
    }

`;