import { useState } from 'react'

import { Container, Content, ButtonLarge } from './style'

import HeaderPage from '../../../Components/HeaderPage'
import Link from '../../../Components/Link'

const CreateProduct = () => {
    let listProducts = []
    const INITIAL_STATE = {
        name: "",
        brand: "",
        price: "",
        stock: "",
    }
    const [product, setProduct] = useState(INITIAL_STATE)

    listProducts = localStorage.getItem('@weslleylsilva/listProducts') 
        ? JSON.parse(localStorage.getItem('@weslleylsilva/listProducts')) : []

    // console.log('listProducts', listProducts)

    const setProductHandle = (key, value) => {
        setProduct({
            ...product,
            [key]: value
        })
    }

    const addProductHandle = (e) => {
        e.preventDefault()
        listProducts.push(product)
        localStorage.setItem('@weslleylsilva/listProducts', JSON.stringify(listProducts))
        setProduct(INITIAL_STATE)
    }

    return (
        <Container>
            <HeaderPage>
                <h1>Novo produto</h1>
                <Link to="/products">Voltar</Link>
            </HeaderPage>

            <Content>
                <form>
                    <input 
                    className="input"
                    type="text" 
                    placeholder="Nome do produto"
                    onChange={e => setProductHandle('name', e.target.value)}
                    value={product.name}
                    />

                    <input 
                    className="input"
                    type="text" 
                    placeholder="Marca do produto" 
                    onChange={e => setProductHandle('brand', e.target.value)}
                    value={product.brand}
                    />

                    <input 
                    className="input"
                    type="number" 
                    placeholder="Preço do produto" 
                    onChange={e => setProductHandle('price', e.target.value)}
                    value={product.price}
                    />

                    <input 
                    className="input"
                    type="number" 
                    placeholder="Estoque do produto" 
                    onChange={e => setProductHandle('stock', e.target.value)}
                    value={product.stock}
                    />
                    
                    <ButtonLarge
                        background="#0AAA5D"
                        color="#fff"
                        onClick={e => addProductHandle(e)}
                    >
                        Cadastrar
                    </ButtonLarge>
                    


                </form>
            </Content>
        </Container>

    )
}

export default CreateProduct