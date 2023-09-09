import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const TotalItems = () => {
    const { cart } = useContext(DataContext);

    const itemsquanty = cart.reduce((acc, el) => acc + el.quanty, 0)



    return <span className="cart-item-total">{itemsquanty}</span>


}

export default TotalItems