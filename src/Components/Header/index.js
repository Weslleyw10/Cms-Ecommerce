import { Container, Logo } from './style'

import logoImg from '../../Assets/images/logo.png'

const Header = () => {
    return (
        <Container>
            <Logo src={logoImg} alt="Logo gama academy"/>            
        </Container>
    )
}

export default Header