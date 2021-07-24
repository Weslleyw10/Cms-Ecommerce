import { useState } from 'react'
import { Drawer } from 'rsuite'



import {
    Container,
    Content
} from './style'

import HeaderPage from '../../../Components/HeaderPage'
import Link from '../../../Components/Link'
import Table from '../../../Components/Table'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'

const Stock = () => {
    const products = localStorage.getItem('@weslleylsilva/listProducts') ?
        JSON.parse(localStorage.getItem('@weslleylsilva/listProducts')) : false

    const [drawer, setDrawer] = useState(false)
    const [product, setProduct] = useState({
        id: "",
        name: "",
        brand: "",
        price: "",
        stock: "",
    })

    const setProductHandle = (key, value) => {
        setProduct({
            ...product,
            [key]: value
        })
    }

    const updateProductHandle = (product) => {
        let newArr = []

        products.map(item => {
            if(item.id === product.id) {
                item = product
            }

            newArr.push(item)
            return newArr
        })

        localStorage.setItem('@weslleylsilva/listProducts', JSON.stringify(newArr))
        setDrawer(false)
    }

    return (
        <Container>

            <Drawer
                show={drawer}
                size="sm"
                onHide={() => setDrawer(false)}
            >
                <Drawer.Body>
                    <h2 style={{ marginBottom: '2rem' }}>Editar Produto</h2>

                    <Input
                        type="text"
                        placeholder="Nome do produto"
                        value={product.name}
                        onChange={e => setProductHandle('name', e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Marca do produto"
                        value={product.brand}
                        onChange={e => setProductHandle('brand', e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Preço do produto"
                        value={product.price}
                        onChange={e => setProductHandle('price', e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Qtd. em estoque do produto"
                        value={product.stock}
                        onChange={e => setProductHandle('stock', e.target.value)}
                    />
                </Drawer.Body>

                <Drawer.Footer >
                    <div style={{ marginBottom: '1.5rem' }}>
                        <Button
                            full
                            background="#0AAA5D"
                            onClick={() => updateProductHandle(product)}
                        >
                            Atualizar
                        </Button>
                    </div>

                </Drawer.Footer>

            </Drawer>


            <HeaderPage>
                <h1>Estoque</h1>
                <Link to="/products/create" background="#0AAA5D" >
                    Novo Produto
                </Link>
            </HeaderPage>

            <Content> 
                {
                    products ? (
                        <Table
                            data={products}
                            config={[
                                { label: 'Nome', key: 'name', width: 200, fixed: true },
                                { label: 'Marca', key: 'brand', width: 200 },
                                { label: 'Preço', key: 'price', width: 200 },
                                { label: 'Estoque', key: 'stock', width: 200 },
                            ]}

                            onRowClick={(product) => {
                                setDrawer(true)
                                setProduct(product)
                            }}
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