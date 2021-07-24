import {
    Container,
    Content,
} from './style'

import HeaderPage from '../../../Components/HeaderPage'
import Link from '../../../Components/Link'
import Table from '../../../Components/Table'

const listCustomer = () => {

    const customers = localStorage.getItem('@weslleylsilva/listcustomer') ?
        JSON.parse(localStorage.getItem('@weslleylsilva/listcustomer')) : false

    return (
        <Container>
            <HeaderPage>
                <h1>Clientes</h1>
                <Link to="/customer/create" background="#0AAA5D">
                    Novo Cliente
                </Link>
            </HeaderPage>

            <Content>
                {
                    customers ? (
                        <Table
                            // loading={form.filtering}
                            data={customers}
                            config={[
                                { label: 'Nome', key: 'name', width: 200, fixed: true },
                                { label: 'Email', key: 'email', width: 200 },
                                { label: 'Telefone', key: 'phone', width: 200 },
                                { label: 'CPF', key: 'document', width: 200 },
                            ]}
                            onRowClick={(customer) => console.log(customer)}
                        />
                    ) : (
                        <h1>Você ainda não tem clientes cadastrados :(</h1>
                    )
                }

            </Content>
        </Container >
    )
}

export default listCustomer