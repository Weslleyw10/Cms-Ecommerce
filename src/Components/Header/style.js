import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    background: #dddddd;

    /* @media(max-width: 375px) {
        flex-direction: column;
    } */
`;

export const Logo = styled.img`
    width: 150px;
    
    /* height: 150px; */
`;