import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import "./Products.css";
import ProductsDetails from './ProductsDetails';
import { Link } from 'react-router-dom';

const Products = () => {
    const { data, cart, setCart, buyProducts } = useContext(DataContext);

    return (
        <div>

            {
                data.map((Products) => {

                    return (
                        <div className='card' key={Products.id}>
                            <img src={Products.img} alt='img-product-card' />
                            <h3>{Products.name}</h3>
                            <h4>{Products.price}$</h4>
                            <Link to={`/products/${Products.id}`}>Item Details</Link>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products