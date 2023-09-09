import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const CartItemCounter = ({ Products }) => {
    const { cart, setCart, buyProducts } = useContext(DataContext);

    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === Products.id);
        productrepeat.quanty !== 1 &&
            setCart(cart.map((item) => (item.id === Products.id ?
                { ...Products, quanty: productrepeat.quanty - 1 } : item)));
    };
    return (
        <>
            <p className="counter-button" onClick={decrese}>-</p>
            <p>{Products.quanty}</p>
            <p className="counter-button" onClick={() => buyProducts(Products)}>+</p>
        </>
    )
}

export default CartItemCounter