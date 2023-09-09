import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, [])

    const buyProducts = (Products) => {
        const productrepeat = cart.find((item) => item.id === Products.id);
        if (productrepeat) {
            setCart(cart.map((item) => item.id === Products.id ?
                { ...Products, quanty: productrepeat.quanty + 1 } : item))
        }
        else {
            setCart([...cart, Products])

        }
    };

    const productsDetails = (Products) => {
        const product = data.find((item) => item.id === Products.id);

        return product.details;

    };


    return (
        <DataContext.Provider value={{ data, cart, setCart, buyProducts, productsDetails }}>
            {children}
        </DataContext.Provider>

    )
};

