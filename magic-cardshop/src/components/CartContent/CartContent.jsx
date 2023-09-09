import CartElements from "./CartElements"
import { CartTotal } from "./CartTotal";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import "./CartContent.css";
const CartContent = () => {
    const { cart } = useContext(DataContext)

    return (
        <>

            {cart.length > 0 ? (
                <>
                    <CartElements />
                    <CartTotal />
                </>

            ) : (
                <h2 className="cart-message-center">Your cart is empty</h2>


            )}

        </>
    )
};



export default CartContent