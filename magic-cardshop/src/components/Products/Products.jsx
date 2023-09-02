import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import "./Products.css";
const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);
    const buyProducts = (Products) => {
        console.log(Products)
        setCart([...cart, Products])
    }
    return (
        data.map((Products) => {

            return (
                <div className='card'>
                    <img src={Products.img} alt='img-product-card' />
                    <h3>{Products.name}</h3>
                    <h4>{Products.price}$</h4>
                    <button onClick={() => buyProducts(Products)}>Add To Cart</button>

                </div>
            )
        })
    )
}

export default Products