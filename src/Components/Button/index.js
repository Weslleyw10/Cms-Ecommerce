import { Button as ButtonComponent } from './style'

const Button = ({ children }) => {
    return (
        <ButtonComponent>
            { children }
        </ButtonComponent>
    )
}

export default Button