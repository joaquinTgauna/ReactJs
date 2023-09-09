import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import React from 'react'


const ProductsDetails = () => {
    const { data, buyProducts } = useContext(DataContext)


    return (
        <div>
            {
                data
                    .filter((element) => {
                        return element.details === "details"
                    })
                    .map((Products) => {

                        return (
                            <div className='card'>
                                <img src={Products.img} alt='img-product-card' />
                                <h3>{Products.name}</h3>
                                <h4>{Products.price}$</h4>
                                <button onClick={() => buyProducts(Products)}>Add to cart</button>

                            </div>
                        )
                    })
            }
        </div>


    )

}

export default ProductsDetails