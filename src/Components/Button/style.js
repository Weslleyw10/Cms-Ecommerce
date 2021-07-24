import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.full ? '100%' : '120px'};
    min-width: 10%; 
    padding: ${props => props.full ? '1rem' : '.5rem'};
    font-size: ${props => props.full ? '1.3rem' : '0.875rem'};

    background: ${props => props.background ?? "#000"};
    color: ${props => props.color ?? "#fff"};

    
    border-radius: 6px;
    font-weight: bold;

    :hover {
        opacity: .8;
        transition: .3s;
    }
`;