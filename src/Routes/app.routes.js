import { Switch, Route, BrowserRouter } from 'react-router-dom'

import listCustomer from '../Pages/Customer/List'
import createCustomer from '../Pages/Customer/Create'
import Stock from '../Pages/Stock'

import Layout from '../Components/Layout'

const appRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                <Route path="/" exact component={listCustomer} />
                <Route path="/customer/create" component={createCustomer} />
                <Route path="/stock" component={Stock} />
            </Layout>
        </Switch>
    </BrowserRouter>
)

export default appRoutes