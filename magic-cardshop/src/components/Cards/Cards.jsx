import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import React from 'react'


const Cards = () => {
    const { data, productsDetails } = useContext(DataContext)


    return (
        <div>
            {
                data
                    .filter((element) => {
                        return element.type === "Card"
                    })
                    .map((Products) => {

                        return (
                            <div className='card'>
                                <img src={Products.img} alt='img-product-card' />
                                <h3>{Products.name}</h3>
                                <h4>{Products.price}$</h4>
                                <button onClick={() => productsDetails(Products)}>Item Details</button>

                            </div>
                        )
                    })
            }
        </div>


    )

}

export default Cards