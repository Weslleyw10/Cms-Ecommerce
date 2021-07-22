import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    grid-area: AS;
    background: #666;
    padding: 1rem;
    
`;


export const Logo = styled.div`
    width: 80%;
    height: 40px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuContainer = styled.nav`
    height: 80vh;
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled(Link).attrs({})`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem;
    margin-bottom: .3rem;

    > svg {
        margin-right: .3rem;
    }

    :hover {
        background: #888;
        transition: .3s;
        
    }

`;