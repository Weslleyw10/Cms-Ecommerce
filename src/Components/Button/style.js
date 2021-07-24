import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.width ?? ''};
    min-width: 10%;        
    padding: .5rem 0;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: bold;

    :hover {
        opacity: .6;
        transition: .3s;
    }
`;