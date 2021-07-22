import { Grid } from './style'

import Header from '../Header'
import Aside from '../Aside'
import Content from '../Content'

const Layout = ({ children }) => {
    return (
        <Grid>
            <Header />
            <Aside />
            <Content>
                { children }
            </Content>
        </Grid>
    )

}

export default Layout;