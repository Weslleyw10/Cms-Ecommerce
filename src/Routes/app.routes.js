import { Switch, Route, BrowserRouter } from 'react-router-dom'

import ListCustomer from '../Pages/Customer/List'
import CreateCustomer from '../Pages/Customer/Create'
import ListProducts from '../Pages/Stock/List'
import CreateProducts from '../Pages/Stock/Create'

import Layout from '../Components/Layout'

const appRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                <Route path="/" exact component={ListCustomer} />
                <Route path="/customer/create" component={CreateCustomer} />
                <Route path="/products" exact component={ListProducts} />
                <Route path="/products/create" component={CreateProducts} />
            </Layout>
        </Switch>
    </BrowserRouter>
)

export default appRoutes