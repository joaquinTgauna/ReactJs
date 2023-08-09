import React from 'react'
import Producto from '../components/Productos'
import Catalogo from '../../DataBase'
import { Container } from 'react-bootstrap'


function ItemListConteiner(props) {
    return (
        <Container>

            <Producto

                thumbnail={element.thumbnail}
                name={element.name}


            />

        </Container>
    )
}

export default ItemListConteiner