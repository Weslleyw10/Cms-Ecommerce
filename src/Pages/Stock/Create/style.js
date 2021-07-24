import styled from 'styled-components'

export const Container = styled.div``;

export const Content = styled.div`
    height: 70vh;
    padding: 1rem 0;

    display: flex;
    justify-content: center;

    > form {
        background: #ffffff;
        width: 60%;
        padding: 2rem;
        border-radius: 6px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);

        @media(max-width: 1100px) {
            width: 90%;
        }
    }

    .input {
        width: 100%;
        height: 8vh;
        padding: 1rem;
        background: #eeeeee;
        border-radius: 6px;
        font-size: 1rem;
        margin-bottom: .8rem;
    }

`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: .8rem;

    .input {
        width: 49%;
        margin: 0;
    }
`;

export const ButtonLarge = styled.button`
    width: 100%;      
    padding: 1rem 0;

    background: ${props => props.background ?? ""};
    color: ${props => props.color ?? ""};

    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;

    :hover {
        opacity: .8;
        transition: .3s;
    }

`;


