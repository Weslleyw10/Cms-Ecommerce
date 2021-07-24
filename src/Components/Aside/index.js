import { Container, Logo, MenuContainer, MenuItem } from './style'

import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineStock } from 'react-icons/ai'

const Aside = () => {
    return (
        <Container>
            <Logo>
                CMS Ecommerce
            </Logo>

            <MenuContainer>
                <MenuItem to="/">
                    <BsFillPeopleFill />
                    Clientes                
                </MenuItem>

                <MenuItem to="/products">
                    <AiOutlineStock />
                    Estoque                
                </MenuItem>

            </MenuContainer>


        </Container>

    )
}

export default Aside