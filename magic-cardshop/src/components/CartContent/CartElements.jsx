import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./CartContent.css";
import { json } from "react-router-dom";
const CartElements = () => {
    const { cart } = useContext(DataContext);
    const p = JSON.stringify(cart)
    p.map((Products) => {
        return (
            <div className="cartContent" key={Products.id}>
                <img src={Products.img} alt="product-card" />
                <h3 className="name">{Products.name}</h3>
                <h4 className="price">{Products.price}$</h4>

            </div>
        );
    });

}

export default CartElements