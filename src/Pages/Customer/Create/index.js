import { useState } from 'react'

import { Container, Content, Row, ButtonLarge } from './style'

import HeaderPage from '../../../Components/HeaderPage'
import Link from '../../../Components/Link'

const CreateCustomer = () => {
    let listCustomer = []
    const CUSTOMER_INITIAL_STATE = {
        name: "",
        email: "",
        phone: "",
        document: "",
        address: {
            street: "",
            district: "",
            city: "",
            state: "",
        }
    }
    const [customer, setCustomer] = useState(CUSTOMER_INITIAL_STATE)

    listCustomer = localStorage.getItem('@weslleylsilva/listcustomer') 
        ? JSON.parse(localStorage.getItem('@weslleylsilva/listcustomer')) : []

    console.log('listCustomer', listCustomer)

    const setCustomerHandle = (key, value) => {
        setCustomer({
            ...customer,
            [key]: value
        })
    }

    const setCustomerAddressHandle = (key, value) => {
        setCustomer({
            ...customer,
            address: {
                ...customer.address,
                [key]: value
            }
        })
    }

    const addCustomerHandle = (e) => {
        e.preventDefault()
        listCustomer.push(customer)
        localStorage.setItem('@weslleylsilva/listcustomer', JSON.stringify(listCustomer))

        setCustomer(CUSTOMER_INITIAL_STATE)
    }

    return (
        <Container>
            <HeaderPage>
                <h1>Novo cliente</h1>
                <Link to="/">Voltar</Link>
            </HeaderPage>

            <Content>
                <form>
                    <input 
                    className="input"
                    type="text" 
                    placeholder="Nome do cliente"
                    onChange={e => setCustomerHandle('name', e.target.value)}
                    value={customer.name}
                    />
                    <input 
                    className="input"
                    type="text" 
                    placeholder="Email do cliente" 
                    onChange={e => setCustomerHandle('email', e.target.value)}
                    value={customer.email}
                    />

                    <Row>
                        <input 
                        className="input"
                        type="text" 
                        placeholder="Telefone do cliente"
                        onChange={e => setCustomerHandle('phone', e.target.value)}
                        value={customer.phone}
                    />

                        <input 
                        className="input"
                        type="text" 
                        placeholder="CPF do cliente"
                        onChange={e => setCustomerHandle('document', e.target.value)}
                        value={customer.document}
                    />
                        
                    </Row>

                    <Row>
                        <input 
                        className="input"
                        type="text" 
                        placeholder="Endereço"
                        onChange={e => setCustomerAddressHandle('street', e.target.value)}
                        value={customer.address.street}
                    />

                        <input 
                        className="input"
                        type="text" 
                        placeholder="Bairro"
                        onChange={e => setCustomerAddressHandle('district', e.target.value)}
                        value={customer.address.district}
                        />                        
                    </Row>

                    <Row>
                        <input 
                        className="input"
                        type="text" 
                        placeholder="Cidade"
                        onChange={e => setCustomerAddressHandle('city', e.target.value)}
                        value={customer.address.city}
                        />

                        <input 
                        className="input"
                        type="text" 
                        placeholder="Estado"
                        onChange={e => setCustomerAddressHandle('state', e.target.value)}
                        value={customer.address.state}
                        />                        
                    </Row>
                    
                    <ButtonLarge
                        background="#0AAA5D"
                        color="#fff"
                        onClick={e => addCustomerHandle(e)}
                    >
                        Cadastrar
                    </ButtonLarge>
                    


                </form>
            </Content>
        </Container>



    )
}

export default CreateCustomer