import { useContext } from "react";
import CartItemCounter from "./CartItemCounter";
import { DataContext } from "../context/DataContext";
import "./CartContent.css";
const CartElements = () => {
    const { cart, setCart } = useContext(DataContext);

    const deleteProduct = (id) => {
        const foundid = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundid;
        });

        setCart(newCart);
    };

    return <div>{cart.map((Products) => {

        return (
            <div className="cartContent" key={Products.id}>
                <img src={Products.img} alt="product-card" />
                <h3 className="name">{Products.name}</h3>
                <CartItemCounter Products={Products} />
                <h4 className="price">{Products.price * Products.quanty}$</h4>
                <h3 className="cart-delete-button" onClick={() => deleteProduct(Products.id)}>❌</h3>

            </div>
        );
    })
    }</div>
}

export default CartElements