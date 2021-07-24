import {
    Container,
    Content,
} from './style'

import HeaderPage from '../../../Components/HeaderPage'
import Link from '../../../Components/Link'
import Table from '../../../Components/Table'

const Stock = () => {
    const customers = localStorage.getItem('@weslleylsilva/listProducts') ?
        JSON.parse(localStorage.getItem('@weslleylsilva/listProducts')) : false

    return (
        <Container>
            <HeaderPage>
                <h1>Estoque</h1>
                <Link to="/products/create">
                    Novo Produto
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
                                { label: 'Marca', key: 'brand', width: 200 },
                                { label: 'Preço', key: 'price', width: 200 },
                                { label: 'Estoque', key: 'stock', width: 200 },
                            ]}
                            // actions={(customer) => (
                            //   <Button color="blue" size="xs">
                            //     Ver
                            //   </Button>
                            // )}
                            onRowClick={(customer) => console.log(customer)}
                        />
                    ) : (
                        <h1>Você ainda não tem produtos cadastrados :(</h1>
                    )
                }
            </Content>
        </Container >
    )
}

export default Stock