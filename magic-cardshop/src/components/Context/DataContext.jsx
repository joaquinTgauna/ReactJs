import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, [])
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>

    )
};

